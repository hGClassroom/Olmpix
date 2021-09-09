const express = require('express');
const router = express.Router();
const Country = require('../models/country.model');

/* GET all the countries as well as the cheers. */
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find().sort({ startDate: 'desc' });
    res.json(countries);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});

router.post('/new', async (req, res) =>{
  const newCountry = new Country();

  // TODO - If req.[.*]Medals is null
  newCountry.name = req.body.name;
  newCountry.goldMedals = req.body.goldMedals;
  newCountry.silverMedals = req.body.silverMedals;
  newCountry.bronzeMedals = req.body.bronzeMedals;

  newCountry.save()
      .then(() => res.json('country added!'))
      .catch((err => res.status(400).json('Error: '+ err)));
});


// Update the tally
router.put('/:id', async (req, res) => {
  const specificCountry = await Country.findById(req.params.id);

  specificCountry.name = req.body.name === undefined ? specificCountry.name : req.body.name;
  specificCountry.cheers = req.body.cheers === undefined ? specificCountry.cheers : req.body.cheers;
  specificCountry.goldMedals = req.body.goldMedals === undefined ? specificCountry.goldMedals : req.body.goldMedals;
  specificCountry.silverMedals = req.body.silverMedals === undefined ? specificCountry.silverMedals : req.body.silverMedals;
  specificCountry.bronzeMedals = req.body.bronzeMedals === undefined ? specificCountry.bronzeMedals : req.body.bronzeMedals;

  specificCountry.save()
    .then(() => res.json('country updated!'))
    .catch((err => res.status(400).json('Error: ' + err)));
});

module.exports = router;
