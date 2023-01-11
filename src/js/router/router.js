const express = require("express");
const router = express.Router();
const { addItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/controllers.js");


// Handle GET requests to /items
router.get('/items', getItems);

router.get('/items/:id', getItem);

// Handle POST requests to /items
router.post('/items', addItem);

// Handle PATCH requests to /items/:id
router.patch('/items/:id', updateItem);

// Handle DELETE requests to /items/:id
router.delete('/items/:id', deleteItem);

module.exports = router;
