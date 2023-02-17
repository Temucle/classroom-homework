const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { parse } = require("path");
const { json } = require("express");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");

const port = 1234;
const app = express();

app.use(cors());
app.use(express.json());

// const hash = bcrypt.hashSync("Temucle");
// console.log({ hash });

const user = {
  username: "Temujin",
  password: "$2a$10$bQoSI.7Nu0k9qDYYuonP/.nGFpcKLOwoU5/K7OLVIjf6bnLhDZtDi",
};

let userTokens = [];

function getArticles() {
  const content = fs.readFileSync("jsonData/articles.json");
  const articles = JSON.parse(content);
  return articles;
}
function getCategories() {
  const content = fs.readFileSync("jsonData/categories.json");
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
  fs.writeFileSync("jsonData/articles.json", JSON.stringify(articles));

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

  fs.writeFileSync("jsonData/articles.json", JSON.stringify(articles));

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

  fs.writeFileSync("jsonData/articles.json", JSON.stringify(articles));

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
  fs.writeFileSync("jsonData/categories.json", JSON.stringify(categories));

  res.sendStatus(201);
});

// /admin Sign In

app.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (
    user.username === username &&
    bcrypt.compareSync(password, user.password)
  ) {
    const token = uuid();
    userTokens.push(token);
    res.json({ token });
    req.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.listen(port, () => {
  console.log("App is listening at port", port);
});
