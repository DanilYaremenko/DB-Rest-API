const express = require('express');
const app = express();
const port = 8000;

// Use body-parser to parse JSON bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import the connection to the database
const connection = require('../db/db.js');

// Import the router file
const router = require('../router/router.js');

// Use the router for all requests
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
