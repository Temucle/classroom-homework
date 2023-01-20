import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import uuid from "react-uuid";
import { Link, useNavigate, Navigate } from "react-router-dom";

function WritingPanel({ articles, setArticles }) {
  const [articleIMG, setIMG] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
  );

  let [IMGaddress, urlChanger] = useState("");

  const [toHome, setToHome] = React.useState(false);

  const [show, setShow] = useState(false);

  const [categoryInputValue, getNewCategory] = useState("");

  const [articleTitle, setArticleTitle] = useState("");
  const [articleBody, setArticleBody] = useState("");

  const handleClose = () => {
    setShow(false);
    getNewCategory("");
  };

  const handleShow = () => setShow(true);

  let newCategories;

  let [categories, setCategory] = useState([
    "Эдийн засаг",
    "Улс төр",
    "Шинжлэх ухаан",
    "Гэмт хэрэг",
    "Эрүүл мэнд",
  ]);

  let categoriesList = categories.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

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
      newCategories = [...categories, categoryInputValue];
      handleClose();
      setCategory(newCategories);
    } else {
    }
  }
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
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Artilce-Body</Form.Label>
        <Form.Control
          value={articleBody}
          onChange={(e) => setArticleBody(e.target.value)}
          as="textarea"
          rows={10}
        />
      </Form.Group>
      <div className="mb-5">
        <label htmlFor="news_category">Мэдээний төрөл сонгох: </label>
        <select className="mx-3" id="news_category" name="news_category">
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
      <AwesomeButton
        className="mb-5"
        type="primary"
        onPress={() => {
          let newArticle = {
            title: articleTitle,
            body: articleBody,
            img: articleIMG,
          };
          setArticles([newArticle, ...articles]);
          setArticleBody("");
          setArticleTitle("");
          IMGChanger("");
          setToHome(true);
        }}
      >
        Post
      </AwesomeButton>
    </div>
  );
}

export default WritingPanel;
