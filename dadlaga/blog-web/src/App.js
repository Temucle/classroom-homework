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
import Articles from "./components/articleList";
import Footer from "./components/footer";
import ClientApp from "./client/ClientApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import { useState } from "react";
import PageBlogs from "./client/Blogs";
import Home from "./client/home";
import SingleBlog from "./client/singleBlog";

function App() {
  return (
    <BrowserRouter Name="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/blogs" element={<PageBlogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/admin" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
