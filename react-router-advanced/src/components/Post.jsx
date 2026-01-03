import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return <p>Viewing post with ID: {id}</p>;
};

export default Post;
