const Author = require('../models/author');

exports.postAddUser = (req,res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    Author.create({
        name:name,
        email:email
    }).then(author => {
        if (!author) {
            res.status(404).json({ message: 'User not created' });
        } else {
        res.status(200).json(author);
        }
    }).catch(err => console.log(err));
};

exports.getUser = (req,res,next) => {
    const userId = req.params.userId;
    Author.findByPk(userId).then((author) => {
        if (!author) {
            res.status(404).json({ message: 'User not found' });
        } else {
            const user = {
                id: author.id,
                name: author.name,
                email: author.email
            };
            res.status(200).json(user);
        }
    }).catch(err => console.log(err))
    console.log(userId);
}