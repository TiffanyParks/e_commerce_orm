const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories and their associated products
router.get('/', async (req, res) => {
  try {
    // Find all categories, including their associated products
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

