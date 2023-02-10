import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function WritingPanel() {
  const [articleIMG, setIMG] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
  );

  let [IMGaddress, urlChanger] = useState("");

  const [toHome, setToHome] = React.useState(false);

  const [show, setShow] = useState(false);

  const [categoryInputValue, getNewCategory] = useState("");

  const [articleTitle, setArticleTitle] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleCategory, setArticleCategory] = useState();
  const [articleCategories, setArticleCategories] = useState();

  const [isCategoryRead, setIsCategoryLoad] = useState(false);

  const handleClose = () => {
    setShow(false);
    getNewCategory("");
  };

  const handleShow = () => setShow(true);

  let newCategories;
  let apiArticles;

  function loadCategories() {
    axios.get(`http://localhost:1234/categories`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticleCategories(data);
        setIsCategoryLoad(true);
      } else {
        alert(`Алдаа гарлаа: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  if (isCategoryRead) {
    var categoriesList = articleCategories.map((item, index) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  }

  const dayjs = require("dayjs");
  dayjs().format();

  function urlTranslator(event) {
    urlChanger(event.target.value);
  }

  function IMGChanger() {
    setIMG(IMGaddress);
    urlChanger("");
  }

  function categoryInputValueChanger(event) {
    getNewCategory(event.target.value);
  }

  function addCategory() {
    if (categoryInputValue) {
      axios
        .post(`http://localhost:1234/categories`, {
          name: categoryInputValue,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            handleClose();
            loadCategories();
          }
        });
    } else {
    }
  }

  function addArticle() {
    if (articleBody && articleTitle && articleIMG) {
      axios
        .post(`http://localhost:1234/articles`, {
          newArticle: {
            title: articleTitle,
            description: articleDescription,
            body: articleBody,
            img: articleIMG,
            postedTime: dayjs().format("MMM DD, YYYY"),
            key: uuid(),
            reactions: 0,
            category: articleCategory,
            isLiked: false,
            comments: [
              {
                writer: {
                  profilePic: "sadfasdfasdf",
                  username: "User1",
                },
                commentPostedDate: "2020-1-1",
                commentContent: "Great article!",
              },
              {
                writer: {
                  profilePic: "sadfasdfasdf",
                  username: "User1",
                },
                commentPostedDate: "2020-1-1",
                commentContent: "Great article!",
              },
              {
                writer: {
                  profilePic: "sadfasdfasdf",
                  username: "User1",
                },
                commentPostedDate: "2020-1-1",
                commentContent: "Great article!",
              },
            ],
          },
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            setArticleBody("");
            setArticleTitle("");
            IMGChanger("");
            setToHome(true);
          }
        });
    } else {
    }
  }

  axios.interceptors.request.use((config) => {
    console.log("Request sent to: ", config.url);
    return config;
  });

  if (toHome === true) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <Form.Group className="mb-3">
        <div
          className="border border-primary mx-auto"
          style={{ width: "250px", height: "200px" }}
        >
          <img
            src={articleIMG}
            style={{ width: "248px", height: "198px", objectFit: "cover" }}
          />
        </div>
        <InputGroup className="mb-3 mt-5">
          <Form.Control
            placeholder="IMG ADDRESS"
            aria-label="IMG ADDRESS"
            aria-describedby="basic-addon2"
            value={IMGaddress}
            onChange={urlTranslator}
          />
          <Button onClick={IMGChanger} variant="primary" id="button-addon2">
            Submit
          </Button>
        </InputGroup>
        <Form.Label>Article-Title</Form.Label>
        <Form.Control
          type=""
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Label>Artilce-Description</Form.Label>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          value={articleDescription}
          onChange={(e) => setArticleDescription(e.target.value)}
          as="textarea"
          rows={1}
          className="mb-3"
        />
        <Form.Label>Artilce-Body</Form.Label>

        <CKEditor
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "390px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
          editor={ClassicEditor}
          data={articleBody}
          onChange={(e, editor) => {
            const data = editor.getData();
            setArticleBody(data);
          }}
        />
      </Form.Group>
      <div className="mb-5">
        <label htmlFor="news_category">Мэдээний төрөл сонгох: </label>
        <select
          className="mx-3"
          id="news_category"
          name="news_category"
          onChange={(e) => setArticleCategory(e.target.value)}
        >
          {categoriesList}
        </select>

        <>
          <AwesomeButton onPress={handleShow} type="secondary">
            +
          </AwesomeButton>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Мэдээний төрөл нэмэх</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Төрөлийн нэр</Form.Label>
                <Form.Control
                  value={categoryInputValue}
                  onChange={categoryInputValueChanger}
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Хаах
              </Button>
              <Button onClick={addCategory} variant="primary">
                Болсон
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
      <AwesomeButton className="mb-5" type="primary" onPress={addArticle}>
        Post
      </AwesomeButton>
    </div>
  );
}

export default WritingPanel;
