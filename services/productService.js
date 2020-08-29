const db = require('../models/index');
const upload = require("../services/imageUploadService");

const createProduct = async (req) => {
  const product = {
    ...req.body,
    user_id: req.user.id,
    images: ''
  }
  let createdProduct = await db.product.create(product);
  if (req.file) {
    const file = await upload(req.file.buffer)
    createdProduct.images = file.url
    createdProduct = await createdProduct.save();
  }
  return createdProduct;
}

module.exports = createProduct;
