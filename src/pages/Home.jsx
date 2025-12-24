import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Fetch data from json-server
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    });
  };

  return (
    <>
      <h1>Welcome to the blog !</h1>
      <p>These are our latests posts</p>

      <div className="space-y-2">
        <PostItem posts={posts} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Home;
