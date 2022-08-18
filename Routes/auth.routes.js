const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../Models/User')
const router = Router()
// /api/auth/register
router.post(
    '/register',
    //ARRAY OF MIDDLEWEARS
    //VALIDATION EMAIL AND PASSWORD
    [
        check('email', 'Некоректий email').isEmail(),
        check('password', 'Мінімальна кількість символів 6')
            .isLength({min:6})
    ],
    async (req, res) => {
    try{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                error:error.array(),
                message:'Данні при регістрації не вірні'
            })
        }
        //TAKE DATA FROM REQUEST
        const {email, password} = req.body
        //FIND USER WITH SAME EMAIL
        const isUser = await User.findOne({email: email})
        if(isUser){
           return res.status(400).json({message:'Користувач з таким email вже існує'})
        }
        //ADD HASHED IN PASSWORD
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        //SAVE USER IN MONGODB
        await user.save()
        res.status(201).json({message:'Ви успішно зареєстровані'})


    }catch (e) {
        res.status(500).json({message:'Упс щось пішло не так...'})
    }
})
// /api/auth/login
router.post('/login',
    //NORMALIZE EMAIL Trim whitespace from both ends of the address.
    // Lowercase the address.
    [
        check('email', 'Введі коректний email').normalizeEmail().isEmail(),
        //EXISTS PASSWORD
        check('password', 'Введіть пароль').exists()
    ],
    async (req, res) => {
        try{
            const error = validationResult(req)
            if(!error.isEmpty()){
                return res.status(400).json({
                    error:error.array(),
                    message:'Данні при авторизації не вірні'
                })
            }
            const {email, password} = req.body
            //FIND ONE USER WITH REQUEST EMAIL
            const user = await User.findOne({ email })
            if(!user){
                return res.status(400).json({message:'Такого користувача не існує'})
            }
            //match PASSWORD WITH HASHED
            const isMatchPassword = await bcrypt.compare(password, user.password)
            if(!isMatchPassword){
                return res.status(400).json({message:'Пароль не вірний спробуйте знову'})
            }
            //GENERATE JWT TOKEN SUBSCRIBE SECRET KEY
            const token = jwt.sign(
                {userId:user.id},
                config.get('jwtSecret'),
                //WHEN TOKEN DIE
                {expiresIn: '1h'}
            )
            res.json({token, userId:user.id})
        } catch (e) {
            res.status(500).json({message:'Упс щось пішло не так...'})
        }
})
module.exports = router
