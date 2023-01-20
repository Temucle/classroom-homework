function HeaderIMG() {
  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/dark-blue-memphis-blog-banner-template_53876-98946.jpg?w=2000&t=st=1673424269~exp=1673424869~hmac=3042c3aaf3af379217cbb140ff576d61d17d9fbcd1963ed11f5fb3f4c13abfeb")`,
        height: "500px",
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "50px",
          color: "#FFF",
          fontFamily: "Montserrat, sans-serif",
        }}
        className="bg-dark px-5 py-3"
      >
        Temujin's Blog
      </p>
    </div>
  );
}
export default HeaderIMG;
