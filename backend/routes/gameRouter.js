const express = require('express');
const router = express.Router();
const Card = require('../models/cardModel');

router.get('/', async (req, res) => {
  try {
    const themes = await Card.find({}, 'title').lean();
    res.json(themes);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/:title', async (req, res) => {
  try {
    const game = await Card.findOne({ title: req.params.title }).lean();
    res.json(game);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
