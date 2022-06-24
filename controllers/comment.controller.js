const Comment = require("../models/comment.model.js");

module.exports.commentsController = {
    postCommentsByNews: async (req, res) => {
        await Comment.create(
            {
            name: req.body.name,
            text: req.body.text,
            news: req.body.news,
            })
            res.json("комм добавлен")
        },


    deleteComments: async (req, res) => {
        await Comment.findByIdremove(req.params.id)
        res.json("комм удален")
    },
    
    
    getCommentsByNews: async (req, res) => {
            const CategoriesNews = await Comment.find({news:req.body.news})
            res.json(CategoriesNews)
        },
        
    };

