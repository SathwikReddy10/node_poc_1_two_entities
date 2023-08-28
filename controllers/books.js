const Books = require("../models/books");

const Author = require('../models/author');

exports.getBooksByAuthor = (req, res, next) => {
    const userId = req.params.userId;
    Author.findByPk(userId).then((author) => {
        if (!author) {
            res.status(404).json({ message: 'User not found' });
        } else {
            Books.findAll({
                authorId : userId
            }).then((books) => {
                console.log("book created by user", author.name,books);
                res.status(200).json(books);
            })
        }
    }).catch(err => console.log(err))
}

exports.postAddBook = (req, res, next) => {
    const userId = req.params.userId;   
    const bookName = req.body.name;
    const zoner = req.body.zoner;
    Author.findByPk(userId).then((author) => {
        if (!author) {
            res.status(404).json({ message: 'User not found' });
        } else {
            Books.create({
                name: bookName,
                zoner: zoner,
                authorId: author.id
            }).then((books) => {
                console.log("book created", books);
                res.status(200).json(books);
            })
        }
    }).catch(err => console.log(err))
};

exports.patchEditBook = (req, res, next) => {
    const bookId = req.params.bookId;
    const updatedName = req.body.name;
    const updatedZoner = req.body.zoner;
    Books.findByPk(bookId).then((book) => {
        if (!book) {
            res.status(404).json({ message: 'book not found' });
        } else {
            book.name = updatedName;
            book.zoner = updatedZoner;
            return book.save();
        }
    })
    .then((result) => {
        res.status(200).json("Book updated successfully");
    })
    .catch(err => console.log(err));
};

exports.deleteBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Books.findByPk(bookId).then((book) => {
        if (!book) {
            res.status(404).json({ message: 'User not found' });
        } else {
            return book.destroy();
        }
    })
    .then((result) => {
        res.status(200).json("Book deleted successfully");
    })
    .catch(err => console.log(err));
};