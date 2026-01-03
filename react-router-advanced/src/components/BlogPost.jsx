import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <p>Viewing Blog Post with ID: {id}</p>;
};

export default BlogPost;
