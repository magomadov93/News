const Category = require("../models/category.model.js");

module.exports.categoryController = {
    postCategory: async (req, res) => {
      await Category.create({
            name: req.body.name
        });
        res.json("категория добавлена");
    },


    deleteCategory: async (req, res) => {
        await Category.findByIdremove(req.params.id);
        res.json("категория удалена")
    },


    getCategory: async (req, res) => {
        const data = await Category.find({});

        res.json(data)
    },

};