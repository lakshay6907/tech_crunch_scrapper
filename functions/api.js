const express = require('express');
const latest = require('./routers/latest');
const startups = require('./routers/startups');
const AI = require('./routers/AI');
const crypto = require('./routers/crypto');
const serverless = require('serverless-http');
const router = require('./routers/crypto');

const app = express();

app.use('/', latest); 
app.use('/', startups); 
app.use('/', AI);
app.use('/', crypto);

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
