# Furniss - Backend

Furniss is a web application that allows their users to sell and buy up-cycled furniture.
Find the frontend repository [here.](https://github.com/sara-gg/thesis-project-client)

## Dependencies

- [NodeJs](https://nodejs.org/en/) (v10 or above)
- [PostgreSQL](https://www.postgresql.org/)
- [Stripe](https://stripe.com/en-gb) account
- [Cloudinary](https://cloudinary.com/) account

## Tech stack

This project has been created using:

- [NodeJs](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/) (for migrations)
- [Express](https://expressjs.com/) (for server endpoints)

## Getting started

Make sure you have installed NodeJS and Postgres.
To start creating the de database and populate it with mock data run the next commands on your terminal:

```bash
npm i
npm run createDB_and_mockData
npm start
```

That's it!

Now the server run locally [here](http://localhost:3001) (or at port 3001)

If you want to remove the database just run:

```bash
npm run removeDB
```

## Environments

You will need to have the following environment variables set for the application to run:

```ini
SERVER_PORT=Your port to run on
SERVER_URL=Url of backend file
CLIENT_URL=Url of frontend application

DB_TEST_DBNAME=Database name (default is thesis_db)
DB_TEST_USER=Database user name (default is postgres)
DB_TEST_PASSWORD=Database password

SECRET_KEY=Secret key for jwt
STRIPE_SECRET_KEY=Secret key for stripe

CLOUDINARY_URL=Cloudinary storage url
CLOUD_NAME = Name of coudinary container
API_KEY = Api key for cloudinary
API_SECRET =Secret Key for cloudinary

GMAIL_USER=Company email address
GMAIL_PASSWORD=Company email password
GMAIL_HOST=Email host
GMAIL_PORT=Email port
```

We recommend using [Dot Env](https://www.npmjs.com/package/dotenv) for managing your environments
## Testing

This project uses the [Jest](https://jestjs.io/) library for unit test cases, to run the unit tests please do the following:

```bash
npm test
```

To add a unit test simply create a file with the file to be tested followed by `.test` within the `/test` directory. For example:

```bash
./myFile.js -> test/myFile.test.js
```

## Endpoints

### Public endpoints

#### User

```http
POST:        /register                 (to create a new user)
POST:        /login                    (to login)
GET:         /user_public_data/:id     (to get the user public data)
```

#### Product

```http
GET:         /products                 (to get public products, uses query)
GET:         /products?category_id=1   (to get all the public products of a category)
GET:         /products?user_id=3       (to get all the public products of the user with id 3)
```

##### Category

```http
GET:         /categories             (to get all the categories)
```

##### Review

```http
POST:        /review                 (to create a review)
GET:         /review                 (to get all the revews)
```

#### Secure endpoints

##### User

```http
GET:         /user/:id              (to get user data)
PUT:         /user/:id              (to update user data)
```

##### Product

```http
POST:        /product               (to create a product)
PUT:         /product/:id           (to update a product)
DELETE:      /product/:id           (to delete a product)
```

##### Basket products

```http
GET:        /basket_products       (to get all the basket products)
POST:        /basket_products/:id   (to create a basket product reference)
PUT:         /basket_products/:id   (to update the quantity of a basket product)
DELETE:      /basket_products/:id   (to delete a basket product reference)
```

###### Purchase and sale history

```http
GET:        /purchase_history      (to get all the purchased products of the current user)
POST:        /purchase_history      (to create a purchased product of the current user)
PUT:         /sales_history         (to get all the sold products of the current user)
```

###### View

```http
GET:        /product/view          (to get all the user's views)
POST:        /product/view         (to create a new view to a product)
```

## Contributors

- [Amina Antoniazzi](https://github.com/amantoniazzi)
- [Aneesa Zafri](https://github.com/neesafarza)
- [Sara Gomez Samain](https://github.com/sarasamain/Furniss-FrontEnd)
- [Juan Ignacio Sánchez Plastic](https://github.com/juan-ignacio-sanchez-plastic)

Enjoy! 🐣
