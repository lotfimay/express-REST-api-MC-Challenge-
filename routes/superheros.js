const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const SuperHero = require('../models/superhero');


// GET ALL SuperHeros
router.get('/', async(req, res) => {
    try {
        const superheros = await SuperHero.find()
        res.json(superheros)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})


// GET SPECIFIED SuperHero

router.get('/:id', getSuperHero, (req, res) => {
    res.json(res.superhero);
});

// Create SuperHero

router.post('/', async(req, res) => {
    const superhero = new SuperHero({
        name: req.body.name,
        gender: req.body.gender,
        strength: req.body.strength,
        speed: req.body.speed,
        intelligence: req.body.intelligence
    })
    try {
        const newSuperHero = await superhero.save()
        res.status(201).json(newSuperHero)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update SuperHero

router.patch('/:id', getSuperHero, async(req, res) => {
    if (req.body.name != null) {
        res.superhero.name = req.body.name
    }
    if (req.body.gender != null) {
        res.subscriber.gender = req.body.gender
    }
    if (req.body.strenght != null) {
        res.subscriber.strength = req.body.strength
    }
    if (req.body.speed != null) {
        res.subscriber.speed = req.body.speed
    }
    if (req.body.intelligence != null) {
        res.subscriber.intelligence = req.body.intelligence
    }
    try {
        const updatedSuperHero = await res.superhero.save()
        res.json(updatedSuperHero)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Delete superHero

router.delete('/:id', getSuperHero, async(req, res) => {
    try {
        await res.superhero.remove()
        res.json({ message: 'SuperHero Deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



async function getSuperHero(req, res, next) {
    let superhero
    try {
        superhero = await SuperHero.findById(req.params.id)
        if (superhero == null) {
            return res.status(404).json({ message: 'Cannot find super hero' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.superhero = superhero
    next()
}

module.exports = router;