import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Link, useNavigate, Navigate } from "react-router-dom";

function Articles() {
  const dayjs = require("dayjs");
  const [articles, setArticles] = useState("");
  const [isArticlesRead, setIsArticlesRead] = useState(false);

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

  // function HandleLike(index) {
  //   const newArticles = [...articles];
  //   newArticles[index].isLiked = true;
  //   newArticles[index].reactions = newArticles[index].reactions + 1;
  //   setArticles(newArticles);
  // }

  // function HandleDisLike(index) {
  //   const newArticles = [...articles];
  //   newArticles[index].isLiked = false;
  //   newArticles[index].reactions = newArticles[index].reactions - 1;
  //   setArticles(newArticles);
  // }

  if (isArticlesRead) {
    var articleCard = articles.map((article, index) => {
      return (
        <article
          className=""
          style={{
            width: "980px",
            height: "345px",
            border: "1px solid gray",
            marginBottom: "20px",
          }}
          key={article.key}
        >
          <div className="articleIMGdiv d-flex">
            <a style={{ cursor: "pointer" }}>
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
            </a>
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
                        {article.postedTime}
                      </p>
                      |<p className="articleTimer ms-2 mb-0">1 min</p>
                    </div>
                  </div>
                </div>
                <a
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
                  <h2 style={{ fontWeight: "300" }}>
                    {article.title.split("").slice(0, 45).join("")}
                  </h2>
                  <p style={{ fontWeight: "200" }}>
                    {article.body.split("").slice(0, 190).join("") + " . . ."}
                  </p>
                </a>
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
                        // onClick={() => HandleLike(index)}
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
                        // onClick={() => HandleDisLike(index)}
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
        {articleCard && articleCard.slice(0, 4)}
        <button id="toBlogsBtn">View all posts</button>
      </Container>
    </div>
  );
}
export default Articles;
