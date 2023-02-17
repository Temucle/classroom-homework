import MainNav from "../components/mainNav";
import Footer from "../components/footer";

function SingleBlog() {
  function loadArticles() {
    axios.get("http://localhost:1234/articles/").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticles(data);
        setIsArticlesRead(true);
      } else {
        alert(`Алдаа гарлаа: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div>
      <MainNav />

      <Footer />
    </div>
  );
}

export default SingleBlog;
