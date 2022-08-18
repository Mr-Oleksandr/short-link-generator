const {Router} = require('express')
const Link = require('../Models/Links')
const router = Router()


router.get('/:code',  (req, res) => {
    try {
       Link.findOne({ code: req.params.code },(error, link) => {

            if(link){
                link.save()
                return res.redirect(link.from)
            }
        })


    } catch (e) {
        res.status(500).json({ message: 'Упс щось пішло не так...' })
    }
})


module.exports = router
