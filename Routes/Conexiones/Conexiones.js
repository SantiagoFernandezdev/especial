const express = require('express');
const router = express.Router();
const Conexionex = require('../../Models/Conexiones');

router.get('/conexiones', (req, res) => {
    Conexionex.find({})
        .exec((err, documents) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                documents
            })
        })
})


router.delete('/conexiones', (req, res) => {
    Conexionex.deleteMany({})
        .exec((err, count) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                count
            })
        })
})

module.exports = router;