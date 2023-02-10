const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { parse } = require("path");
const { json } = require("express");
const { v4: uuid } = require("uuid");

const port = 1234;
const app = express();

app.use(cors());
app.use(express.json());

function getArticles() {
  const content = fs.readFileSync("articles.json");
  const articles = JSON.parse(content);
  return articles;
}
function getCategories() {
  const content = fs.readFileSync("categories.json");
  const categories = JSON.parse(content);
  return categories;
}

// /articles

app.get("/articles", (req, res) => {
  const articles = getArticles();
  res.json(articles);
  res.sendStatus(200);
});

app.get("/articles/:articleId", (req, res) => {
  const articles = getArticles();
  const { articleId } = req.params;
  const article = articles.find((article) => article.key == id);

  if (article) {
    res.json(article);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.post("/articles", (req, res) => {
  const articles = getArticles();

  const { newArticle } = req.body;

  articles.unshift(newArticle);
  fs.writeFileSync("articles.json", JSON.stringify(articles));

  res.sendStatus(201);
});

app.put("/articles/like/:selectedArticleId", (req, res) => {
  const articles = getArticles();

  const { selectedArticleId } = req.params;
  const likedArticle = articles.find(
    (article) => article.key == selectedArticleId
  );
  likedArticle.reactions = likedArticle.reactions + 1;
  likedArticle.isLiked = true;

  fs.writeFileSync("articles.json", JSON.stringify(articles));

  res.sendStatus(201);
});

app.put("/articles/dislike/:selectedArticleId", (req, res) => {
  const articles = getArticles();

  const { selectedArticleId } = req.params;
  const likedArticle = articles.find(
    (article) => article.key == selectedArticleId
  );
  likedArticle.reactions = likedArticle.reactions - 1;
  likedArticle.isLiked = false;

  fs.writeFileSync("articles.json", JSON.stringify(articles));

  res.sendStatus(201);
});

// /categories

app.get("/categories", (req, res) => {
  const categories = getCategories();
  res.json(categories);
  res.sendStatus(200);
});

app.post("/categories", (req, res) => {
  const categories = getCategories();

  const { name } = req.body;
  const newCategory = { id: uuid(), name: name };

  categories.push(newCategory);
  fs.writeFileSync("categories.json", JSON.stringify(categories));

  res.sendStatus(201);
});

app.listen(port, () => {
  console.log("App is listening at port", port);
});
