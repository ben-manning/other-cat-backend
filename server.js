const express = require('express');
const app = express();
const port = 3000;
const catRoutes = require('./routes/cats');

// ROUTERS
app.use('/cats', catRoutes);

app.listen(port, () => {
  console.log('I am listening at port 3000');
});