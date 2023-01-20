import Articles from "../components/articles";
import Footer from "../components/footer";
import HeaderIMG from "../components/header-img";
import MainNav from "../components/mainNav";

function ClientApp(props) {
  return (
    <div>
      <MainNav />
      <HeaderIMG />
      <Articles {...props} />
      <Footer />
    </div>
  );
}
export default ClientApp;
