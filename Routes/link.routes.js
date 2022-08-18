const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Link = require('../Models/Links')
const auth = require('../middlewear/auth.middlewear')
const router = Router()

router.post('/generate', auth, async (req, res) => {
    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body
        //GENERATE SHORTID
        const code = shortid.generate()

        const existing = await Link.findOne({ from })

        if (existing) {
            return res.json({ link: existing.to })
        }

        const to = baseUrl + '/asd.link/' + code

        const link = new Link({
            from, to, code
        })

        await link.save()

        res.status(201).json({ link:to })
    } catch (e) {
        res.status(500).json({ message: 'Упс щось пішло не так...' })
    }
})

router.post('/from', auth, async (req, res) => {
    try {
       const {to} = req.body

        const exist = await Link.findOne({to})

        return res.status(201).json({link:exist.from})


    } catch (e) {
        res.status(500).json({ message: 'Упс щось пішло не так...' })
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (e) {
        res.status(500).json({ message: 'Упс щось пішло не так...' })
    }
})


module.exports = router
