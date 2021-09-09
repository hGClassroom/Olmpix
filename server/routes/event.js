const express = require('express');
const router = express.Router();
const Event = require('../models/event.model');

/* GET all events in the schedule */
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ startDate: 'desc' });
    res.json(events);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get first 10 events
// router.get('/')

// Create an event

router.post('/new', async (req, res) =>{
    const newEvent = new Event();

    newEvent.title = req.body.title;
    // newEvent.startDate = Date.parse(req.body.startDate);
    // newEvent.endDate = Date.parse(req.body.endDate);
    newEvent.countries = req.body.countries;

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch((err => res.status(400).json('Error: '+ err)));
});

// 

module.exports = router;
