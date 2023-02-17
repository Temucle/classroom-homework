import AllArticles from "../components/allArticles";
import Articles from "../components/articleList";
import Footer from "../components/footer";
import HeaderIMG from "../components/header-img";
import MainNav from "../components/mainNav";

function PageBlogs() {
  return (
    <div>
      <MainNav />
      <HeaderIMG />
      <AllArticles />
      <Footer />
    </div>
  );
}
export default PageBlogs;
