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
### Public endpoints:
POST:        **/register**         (to create a new user)
POST:        **/login**              (to login)
GET:          **/products**       (to get public products, uses query)

example:
to get all the public products of:
a category		                **/products?category=livingroom**
the user with id 3            **/products?user_id=3**



### Private endpoints:
GET:              **/user/:id**              (to get user data)
PUT:              **/user/:id**              (to update user data)
POST:            **/product**             (to create a product)
PUT:              **/product/:id**       (to update a product)
DELETE:        **/product/:id**       (to delete a product)



Enjoy! 🐣