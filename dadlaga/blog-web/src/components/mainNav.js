import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNav() {
  return (
    <Navbar
      style={{
        color: "white",
        fontSize: "14px",
        fontWeight: 300,
        boxShadow: "10px 5px 60px #000",
      }}
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container style={{ width: "980px" }}>
        <div>
          <h4 style={{ color: "white", fontWeight: 300 }}>
            Ｔｅｍｕｊｉｎ　（ー化ぇ）
          </h4>
        </div>
        <div>
          <a
            className="ms-5 text-decoration-none text-white"
            style={{ cursor: "pointer" }}
            href="http://localhost:3000/home"
          >
            HOME
          </a>
          <a
            className="ms-5 text-decoration-none text-white"
            style={{ cursor: "pointer" }}
            href="http://localhost:3000/blogs"
          >
            BLOG
          </a>
          <a
            className="ms-5 text-decoration-none text-white"
            style={{ cursor: "pointer" }}
          >
            CONTACT
          </a>
          <a
            className="ms-5 text-decoration-none text-white"
            style={{ cursor: "pointer" }}
          >
            ABOUT
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default MainNav;
