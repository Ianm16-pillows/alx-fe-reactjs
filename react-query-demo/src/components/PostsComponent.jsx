import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 1, // 1 minute
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>Refetch Posts</button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
