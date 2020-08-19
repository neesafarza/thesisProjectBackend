# thesisProjectBackend

The thesisProject use for the backend Postgres, Sequelize and Express.



## Setup
To start creating the de database and populate it with mock data run the next commands on the terminal:

1) npm i
2) npm run createDB_and_mockData

That's it!

If you want to remove the database just run on the terminal:

* npm run removeDB



## Endpoints
###### Public endpoints:
POST:        **/register**         (to create a new user) </br>
POST:        **/login**              (to login) </br>
GET:          **/products**       (to get public products, uses query) </br>

example: </br>
to get all the public products of:  </br>
a category		                **/products?category_id=1** </br>
the user with id 3            **/products?user_id=3** </br>



###### Private endpoints:
GET:              **/user/:id**              (to get user data) </br>
PUT:              **/user/:id**              (to update user data) </br>
POST:            **/product**             (to create a product) </br>
PUT:              **/product/:id**       (to update a product) </br>
DELETE:        **/product/:id**       (to delete a product) </br>



Enjoy! 🐣