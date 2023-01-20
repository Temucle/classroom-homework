import AdminNav from "../components/adminNav";
import WritingPanel from "../components/writingPanel";

function AdminApp(props) {
  return (
    <div>
      <AdminNav />
      <WritingPanel {...props} />
    </div>
  );
}
export default AdminApp;
