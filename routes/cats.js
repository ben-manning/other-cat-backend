const express = require('express');
const router = express.Router();

// ROUTES
// GET all cats
router.get('/', (req, res) => {
  res.send('This is the GET route for all cats!');
});

// POST a new cat
router.post('/', (req, res) => {
  res.send('This is the POST route for a new cat!');
});

// GET a single cat
router.get('/:id', (req, res) => {
  res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

// PUT to update a cat
router.put('/:id', (req, res) => {
  res.send(`This is the PUT route for a cat: ${req.params.id}`);
});

// DELETE to destroy a cat
router.delete('/:id', (req, res) => {
  res.send(`This is the DELETE route for a cat:  Bye bye ${req.params.id}`);
});

module.exports = router