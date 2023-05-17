const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;

// const Category = require('./models/Category');
// const Product = require('./models/Product');
// const ProductTag = require('./models/ProductTag');
// const Tag = require('./models/Tag');