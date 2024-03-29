import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import axios from "axios";
import react from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import parse from "html-react-parser";
import dayjs from "dayjs";

function Articles() {
  const dayjs = require("dayjs");
  const [articles, setArticles] = useState("");
  const [isArticlesRead, setIsArticlesRead] = useState(false);
  const [articleTimer, setArticleTimer] = useState();
  const [toBlogs, setToBlogs] = react.useState(false);

  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  function loadArticles() {
    axios.get("http://localhost:1234/articles").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticles(data);
        setIsArticlesRead(true);
      } else {
        alert(`Алдаа гарлаа: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadArticles();
  }, []);

  function HandleLike(selectedArticleId) {
    axios
      .put(`http://localhost:1234/articles/like/${selectedArticleId}`)
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          loadArticles();
        }
      });
  }

  function HandleDisLike(selectedArticleId) {
    axios
      .put(`http://localhost:1234/articles/dislike/${selectedArticleId}`)
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          loadArticles();
        }
      });
  }

  if (toBlogs === true) {
    return <Navigate to="/blogs" />;
  }
  if (isArticlesRead) {
    // function viewSingleArticle(articleId) {
    //   axios.get(`http://localhost:1234/articles/{articleId}`).then((res) => {
    //     const { status } = res;

    //   })
    // }

    var articleCard = articles.map((article, index) => {
      return (
        <article
          className=""
          style={{
            width: "980px",
            height: "345px",
            border: "1px solid gray",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
          key={article.key}
        >
          <div className="articleIMGdiv d-flex">
            <Link to={`/blogs/${article.key}`} style={{ cursor: "pointer" }}>
              <img
                className="articleIMG"
                src={article.img}
                style={{
                  width: "460px",
                  height: "343px",
                  textAlign: "start",
                  objectFit: "cover",
                }}
              ></img>
            </Link>
            <div className="articleRight">
              <div className="articleText mx-5 my-4 ">
                <div
                  className="articleWriter d-flex mb-3"
                  style={{ color: "gray", textAlign: "start" }}
                >
                  <img
                    className="posterIMG me-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWYIKgOuBB9v2Ijr1e6LM_KWdn5m0H3MySg&usqp=CAU"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  ></img>
                  <div style={{ fontSize: "12px" }}>
                    <p className="posterName m-0">Admin</p>
                    <div className="d-flex">
                      <p className="articleDate me-2 mb-0">
                        {dayjs(article.postedTime).format("MMM DD, YYYY")}
                      </p>
                      |
                      <p className="articleTimer ms-2 mb-0">
                        <RelativeTime date={article.postedTime} />
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/blogs/${article.key}`}
                  className="articleINFO mb-1"
                  style={{
                    display: "block",
                    color: "aqua",
                    textAlign: "start",
                    fontFamily: "Montserrat, sans-serif",
                    width: "420px",
                    height: "203px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <h2 style={{ fontWeight: "300" }}>{article.title}</h2>
                  <p style={{ fontWeight: "200" }}>
                    {article.description.split("").slice(0, 190).join("") +
                      " . . ."}
                  </p>
                </Link>
                <div
                  className="articleFooter pt-2 d-flex"
                  style={{
                    color: "aqua",
                    borderTop: "1px solid aqua",
                    fontWeight: 200,
                    fontFamily: "Montserrat, sans-serif",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="articleFooterLeft d-flex">
                    <p className="articleViewsNumber me-2">0 views</p>
                    <p className="articleCommentNumber me-2">
                      {article.comments.length} comments
                    </p>
                  </div>
                  <div className="articleFooterRight d-flex">
                    <p className="articleLikeNumber me-2">
                      {article.reactions}
                    </p>
                    {article.isLiked || (
                      <button
                        className="articleLikeBtn btn  p-0"
                        style={{ border: "none", marginBottom: "16px" }}
                        onClick={() => HandleLike(article.key)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="aqua"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </button>
                    )}
                    {article.isLiked && (
                      <button
                        className="articleLikeBtn btn  p-0"
                        style={{ border: "none", marginBottom: "16px" }}
                        onClick={() => HandleDisLike(article.key)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          class="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    });
  }

  return (
    <div
      className="articlesBody bg-dark"
      style={{
        fontFamily: "Montserrat, sans-serif",
        paddingBottom: "2rem",
        minHeight: "500px",
      }}
    >
      <Container className="py-5" style={{ width: "980px" }}>
        {articleCard}
      </Container>
    </div>
  );
}

function RelativeTime({ date }) {
  const [time, setTime] = useState(dayjs().to(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().to(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default Articles;
