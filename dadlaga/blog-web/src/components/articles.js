import { useState } from "react";
import { Container } from "react-bootstrap";
import uuid from "react-uuid";

function Articles({ articles }) {
  const current = new Date();
  const articleDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const dayjs = require("dayjs");
  dayjs().format();

  var postedTime = dayjs();
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  var a = dayjs();
  const [articleTimer, setArticleTimer] = useState(
    dayjs().from(postedTime, true)
  );
  // setInterval(setArticleTimer(dayjs().from(postedTime, true)), 40000);
  let articleCard = articles.map((article, index) => {
    return (
      <article
        className=""
        style={{
          width: "980px",
          height: "345px",
          border: "1px solid gray",
          marginBottom: "20px",
        }}
        key={uuid}
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
                    <p className="articleDate me-2 mb-0">{articleDate}</p>|
                    <p className="articleTimer ms-2 mb-0">{articleTimer}</p>
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
                <h2 style={{ fontWeight: "200" }}>{article.title}</h2>
                <p style={{ fontWeight: "100" }}>{article.body}</p>
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
                  <p className="articleCommentNumber me-2">0 comments</p>
                </div>
                <div className="articleFooterRight d-flex">
                  <p className="articleLikeNumber me-2">12</p>
                  <button
                    className="articleLikeBtn btn  p-0"
                    style={{ border: "none", marginBottom: "16px" }}
                  >
                    🤎
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  });
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
export default Articles;
