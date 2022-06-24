const mongoose = require("mongoose");

const express = require("express");
const app = express();

app.use(express.json());

app.use(require("./routes/news.route"));

app.use(require("./routes/category.route"));

app.use(require("./routes/comment.route"));


mongoose.connect("mongodb+srv://into:code@cluster0.rrbtn.mongodb.net/NEWS")

.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch((e) => console.log(`Ошибка: ${error}`))





app.listen(4000, () => {
    console.log("сервер запущен http://localhost:4000")
});

