require("dotenv").config();

const CLIENT_URL = process.env.CLIENT_URL;



exports.sellerEmailContent = (product) => {
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
            <h3 style="font-weight: bold;">You sold a product!</h3>
            <h4>Here's you sale confirmation</h4>
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
            <h5> Check to make sure the payment has cleared. Always send your item tracked so you're fully protected in the event something goes wrong, 
            keep the proof of trackend postage. 
            </h5>

              <hr>
            <p>You can see your sold products history <a href="${CLIENT_URL}/purchase_history">here</a></p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
