const { Router } = require("express");
const { newsController } = require("../controllers/news.controller.js")

const router = Router();


router.post("/news", newsController.postNews);

router.delete("/news/:id", newsController.deleteNews);

router.patch("/news/:id", newsController.patchNews);

router.get("/news/:id", newsController.getNewsById);

router.get("/news/j", newsController.getNews);

router.get("/news/asd/asd", newsController.getNewsByCategories);


module.exports = router;

