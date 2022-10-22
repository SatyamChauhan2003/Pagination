import React, { useState, useEffect } from "react";
import Post from "./component/Post";
import Pagination from "./component/Pagination";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // console.log(posts);
  const indexOfLastpost=currentPage*postsPerPage;
  const indexOfFirstpost=indexOfLastpost-postsPerPage;
  const currentPosts=posts.slice(indexOfFirstpost,indexOfLastpost);
  const paginate = (pageNumbers)=> setCurrentPage(pageNumbers);
  return (
    <>
    <h1 className="text-primary mb-3">My List</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalposts={posts.length} paginate={paginate}/>
    </>
  );
}

export default App;
