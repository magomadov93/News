const News = require("../models/news.model.js");

module.exports.newsController = {
  postNews: (req, res) => {
    News.create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
      })
      .then(() => {
        res.json("новость добавлена");
      });
  },
  
  deleteNews: (req, res) => {
    News.findByIdremove(req.params.id)
    .then(() => {
      res.json("новость удалена");
    });
  },

  patchNews: async (req, res) => {
   await News.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
      })
      res.json("новость изменена");
  },

  getNewsById: async (req, res) => {
    const news = await News.findById(req.params.id); 
    res.json(news)
    
  },

  getNews: async (req, res) => {
    await News.find({}); 
    res.json(data)
    },

    getNewsByCategories: async (req, res) => {
        try {
            const newsCategories = await News.find({category:req.body.category}).populate('category')
            res.json(newsCategories)
        } catch (e) {
           res.json(e) 
        }
        
    },

};
