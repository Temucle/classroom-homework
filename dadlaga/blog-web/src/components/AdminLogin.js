import axios from "axios";
import { useState } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    axios
      .get(
        `http://localhost:1234/login?username=${username}&password=${password}`
      )
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { token } = data;
          localStorage.setItem("loginToken", token);
          window.location.reload();
        }
      })
      .catch(({ response, code }) => {
        if (response.status === 401) {
          alert("Нууц үг эсвэл нэр буруу байна");
        } else {
          alert(code);
        }
      });
  }
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/2362009/pexels-photo-2362009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="bg-white"
        style={{
          borderRadius: "10px",
          width: "40rem",
          height: "30rem",
        }}
      >
        <div
          className="m-5"
          style={{
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <h1 style={{}}>Login as Admin</h1>
          <p style={{ marginBottom: "4rem", fontWeight: "300", color: "gray" }}>
            Enter your credentials to access your account.
          </p>
          <div className="d-flex">
            <div
              style={{
                height: "4rem",
                width: "4rem",
                border: "rgba(255, 0, 0, 0.1) 1.5px solid",
                borderRadius: "1rem 0 0 1rem ",
                borderRight: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </div>
            <input
              className="mb-4 p-3"
              placeholder="Нэвтрэх нэр"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                height: "4rem",
                border: "rgba(255, 0, 0, 0.1) 1.5px solid",
                borderRadius: "0 1rem 1rem 0 ",
                borderLeft: "none",
              }}
            />
          </div>
          <div className="d-flex">
            <div
              style={{
                height: "4rem",
                width: "4rem",
                border: "rgba(255, 0, 0, 0.1) 1.5px solid",
                borderRadius: "1rem 0 0 1rem ",
                borderRight: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-key-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mb-4 p-3"
              placeholder="Нууц үг"
              style={{
                display: "block",
                width: "100%",
                height: "4rem",
                border: "rgba(255, 0, 0, 0.1) 1.5px solid",
                borderRadius: "0 1rem 1rem 0 ",
                borderLeft: "none",
              }}
            />
          </div>
          <button
            className="btn btn-primary p-3"
            onClick={handleSignIn}
            style={{
              display: "block",
              width: "100%",
              height: "4.5rem",
              borderRadius: "1rem",
              fontSize: "17px",
              fontWeight: "400",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
