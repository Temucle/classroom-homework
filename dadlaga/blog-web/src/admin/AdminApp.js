import AdminLogin from "../components/AdminLogin";
import AdminNav from "../components/adminNav";
import WritingPanel from "../components/writingPanel";

function AdminApp() {
  if (!localStorage.getItem("loginToken")) {
    return <AdminLogin />;
  }
  return (
    <>
      <AdminNav />
      <WritingPanel />
    </>
  );
}
export default AdminApp;
