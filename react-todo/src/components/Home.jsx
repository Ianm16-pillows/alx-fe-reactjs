import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <Link to="/register">Register Form</Link>
    <br />
    <Link to="/formik-register">Formik Form</Link>
    <br />
    <Link to="/posts">Posts</Link>
    <br />
    <Link to="/profile/details">Profile Details</Link>
    <br />
    <Link to="/profile/settings">Profile Settings</Link>
    <br />
    <Link to="/blog/123">Blog Post 123</Link>
  </div>
);

export default Home;
