const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const catRoutes = require('./routes/cats');

require('dotenv').config()

// DB Connection
require('./config/database');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to Bens API'});
})

// ROUTERS
app.use('/cats', catRoutes);

app.listen(port, () => {
  console.log('I am listening at port 3000');
});