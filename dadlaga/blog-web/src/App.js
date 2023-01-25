import logo from "./logo.svg";
import "./App.css";
import BasicExample from "./components/adminNav";
import "bootstrap/dist/css/bootstrap.min.css";
import WritingPanel from "./components/writingPanel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainNav from "./components/mainNav";
import HeaderIMG from "./components/header-img";
import Articles from "./components/articles";
import Footer from "./components/footer";
import ClientApp from "./client/ClientApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="*"
          element={<ClientApp articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/admin"
          element={<AdminApp setArticles={setArticles} articles={articles} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
