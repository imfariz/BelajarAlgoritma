const express = require('express');
const router = express.Router();

const contractors = require('../contractorEntity');

router.get('/', (req, res) => {
    if(contractors.length < 1) {
        res.status(200).json({error: 'Data Not Found'});
    }
    res.status(200).json(contractors);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const contractor = contractors.find(contractor => {
        return contractor.id == id;
    })
    res.status(200).json(contractor)
});

module.exports = router;