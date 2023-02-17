function HeaderIMG() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/15193223/pexels-photo-15193223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        height: "500px",
        backgroundSize: "cover",
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
        Temujin's Article
      </p>
    </div>
  );
}
export default HeaderIMG;
