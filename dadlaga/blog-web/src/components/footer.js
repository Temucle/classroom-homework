import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "300px",
        fontFamily: "Montserrat, sans-serif",
        color: "#FFF",
      }}
    >
      <Container
        className="py-5"
        style={{ width: "900px", textAlign: "center" }}
      >
        <p className="" style={{ fontWeight: "700", fontSize: "25px" }}>
          Ｔｅｍｕｊｉｎ　（ー化ぇ）
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex gap-3" style={{ width: "200px" }}>
            <a
              href="https://www.facebook.com/profile.php?id=100022463230302"
              target="_blank"
            >
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png"
              />
            </a>
            <a href="https://pin.it/1CzrAmQ" target="_blank">
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src="https://static.wixstatic.com/media/9c486556465843c5850fabfd68dfae49.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c486556465843c5850fabfd68dfae49.png"
              />
            </a>
            <a href="https://www.instragram.com" target="_blank">
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
              />
            </a>
          </div>
          <div
            className="mx-5"
            style={{
              borderRight: "white solid 2px",
              borderLeft: "white solid 2px",
            }}
          >
            <label htmlFor="emailInput">Enter your email here</label>
            <input className="d-block mx-5 mb-3" id="emailInput" />
            <button className="d-block mx-5" id="footerSubscribe">
              Subscribe Now
            </button>
          </div>
          <div style={{ width: "200px" }}>
            <p style={{ fontSize: "12px" }}>
              © 2023 by Design for Life. Powered and secured by Temucle
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
