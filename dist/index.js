const express = require('express');
const latest = require('../functions/routers/latest');
const startups = require('../functions/routers/startups');
const AI = require('../functions/routers/AI');
const crypto = require('../functions/routers/crypto');

const app = express();

app.use('/', latest); 
app.use('/', startups); 
app.use('/', AI);
app.use('/', crypto)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
