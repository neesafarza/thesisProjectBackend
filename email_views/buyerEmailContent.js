require("dotenv").config();

const CLIENT_URL = process.env.CLIENT_URL;

exports.buyerEmailContent = (product) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      
    </head>
    <body>
      <div class="email" style="width: 100%; display: flex; justify-content: center" >
        <div class="mail-body" style="max-width: 600px; margin: 0 auto">
          <div class="text" style="padding: 0 20px;">
          <img src="http://localhost:3001/logo.png" style="width:100%;height:50%px"/>
            <h3 style="font-weight: bold;">Thanks for your order!</h3>
            <h4>Here's your order confirmation</h4>
            <hr>
            <ul>
              <li>Product: <b>${product.title}</b></li>
              <li>Price: <b>${product.price} €</b></li>
              <li>Quantity: <b>${product.purchased_quantity}</b></li>
              <li>Material: ${product.material}</li>
              <li>Height: ${product.height} cm</li>
              <li>Width: ${product.width} cm</li>
              <li>Depth: ${product.depth} cm</li>
            </ul>
            <img 
              src="${product.images}"
              style="width:50%;height:50%px;"
              class="center"
              alt="See the product image here: ${product.images}"
            >
            <hr>
            <h3 style="font-weight: bold"> What next?</h3>
            <h5> We’ve let the seller know and they’ll ship your item as soon as possible. 
              It’s an uncertain time for our community right now due to COVID-19 so it may take longer than usual to receive your item. 
              If you have any questions or concerns we encourage you to message them directly.</h5>

              <hr>
            <p>You can see your purchase history <a href="${CLIENT_URL}/purchase_history">here</a></p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
