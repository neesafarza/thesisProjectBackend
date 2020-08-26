require("dotenv").config();

const CLIENT_URL = process.env.CLIENT_URL;

exports.buyerEmailContent = (product) => {
  return `
  <!DOCTYPE html>
  <html>
    <body>
      <div class="email" style="width: 100%; display: flex; justify-content: center" >
        <div class="mail-body" style="max-width: 600px; margin: 0 auto">
          <div class="text" style="padding: 0 20px;">
            <h3>Congratulations! You successfully bought a product on Furnis!</h3>
            <p>This is the detail of your purchase:</p>
            <ul>
              <li>Product: <b>${product.title}</b></li>
              <li>Price: <b>${product.price} €</b></li>
              <li>Quantity: <b>${product.purchased_quantity}</b></li>
              <li>Description: ${product.description}</li>
              <li>Material: ${product.material}</li>
              <li>Height: ${product.height} cm</li>
              <li>Width: ${product.width} cm</li>
              <li>Depth: ${product.depth} cm</li>
            </ul>
            <img 
              src="${product.images}"
              style="width:50%;height:50%px;
              alt="See the product image here: ${product.images}"
            >
            <p>You can see your purchase history <a href="${CLIENT_URL}/purchase_history">here</a></p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
