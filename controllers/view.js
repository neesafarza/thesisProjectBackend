const db = require('../models/index');

exports.create = async (req, res) => {
  try {
    const product_id = req.params.id;
    const user_id = req.user.id;
    await db.views.findOrCreate({
      user_id,
      product_id
    });
    res.status(201);
    res.send('product viewed')
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

exports.getViewedProducts = async (req, res) => {
  const user_id = req.user.id;
  try {
    const viewedProducts = await db.views.findAll({
      where: {
        user_id,
      }
    });
    const products = [];
    for (let i =0; i < viewedProducts.length; i++) {
      const product = await db.product.findOne({
        where: {
          id: viewedProducts[i].product_id,
        }
      });
      products.push(product)
    }
    res.status(200);
    res.json(products)
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}