# thesisProjectBackend

This is the backend repo of the thesis project, you'll find the frontend on https://github.com/sara-gg/thesis-project-client

## Technologies
This project has been created using NodeJS, Postgres, Sequelize and Express.


## Setup
Make sure you have installed NodeJS and Postgres.
To start creating the de database and populate it with mock data run the next commands on your terminal:

* <b>npm i</b>
* <b>npm run createDB_and_mockData</b>
* <b>npm start</b>

That's it!

Now the server run in http://localhost:3001

If you want to remove the database just run on the terminal:

* <b>npm run removeDB</b>



## Endpoints
##### Public endpoints:
###### User
<pre>
POST:        <b>/register</b>                 (to create a new user) </br>
POST:        <b>/login</b>                    (to login) </br>
GET:         <b>/user_public_data/:id</b>     (to get the user public data) </br>
</pre>

###### Product
<pre>
GET:         <b>/products</b>                 (to get public products, uses query) </br>
</br>
example: </br>
GET:         <b>/products?category_id=1</b>   (to get all the public products of a category) </br>
GET:         <b>/products?user_id=3</b>       (to get all the public products of the user with id 3) </br>
</pre>

###### Category
<pre>
GET:         <b>/categories</b>             (to get all the categories) </br>
</pre>

###### Review
<pre>
POST:        <b>/review</b>                 (to create a review) </br>
GET:         <b>/review</b>                 (to get all the revews) </br>
</pre>

##### Private endpoints:
###### User
<pre>
GET:         <b>/user/:id</b>              (to get user data) </br>
PUT:         <b>/user/:id</b>              (to update user data) </br>
</pre>

###### Product
<pre>
POST:        <b>/product</b>               (to create a product) </br>
PUT:         <b>/product/:id</b>           (to update a product) </br>
DELETE:      <b>/product/:id</b>           (to delete a product) </br>
</pre>

###### Basket products
<pre>
GET :        <b>/basket_products</b>       (to get all the basket products) </br>
POST:        <b>/basket_products/:id</b>   (to create a basket product reference) </br>
PUT:         <b>/basket_products/:id</b>   (to update the quantity of a basket product) </br>
DELETE:      <b>/basket_products/:id</b>   (to delete a basket product reference) </br>
</pre>

###### Purchase and sale history
<pre>
GET :        <b>/purchase_history</b>      (to get all the purchased products of the current user) </br>
POST:        <b>/purchase_history</b>      (to create a purchased product of the current user) </br>
PUT:         <b>/sales_history</b>         (to get all the sold products of the current user) </br>
</pre>

###### View
<pre>
GET :        <b>/product/view</b>          (to get all the user's views) </br>
POST:        <b>/product/viewy</b>         (to create a new view to a product) </br>
</pre>

Enjoy! 🐣
