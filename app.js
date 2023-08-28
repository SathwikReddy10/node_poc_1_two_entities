const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const Author = require("./models/author");

const Books = require("./models/books");

const authorRoutes = require("./routes/author");

const bookRoutes = require("./routes/book");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

Books.belongsTo(Author, { constraints: true, onDelete: 'CASCADE' });

Author.hasMany(Books);

app.use('/user',authorRoutes);

app.use('/books', bookRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

