const express = require('express');
const latest = require('./routers/latest');
const startups = require('./routers/startups');
const AI = require('./routers/AI');
const crypto = require('./routers/crypto');

const app = express();

app.use('/', latest); 
app.use('/', startups); 
app.use('/', AI);
app.use('/', crypto)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
