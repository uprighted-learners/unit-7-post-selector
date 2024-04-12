import React, { useEffect, useState } from "react";

function List(props) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const json = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    setPosts(json);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ul id="list">
      {posts.map((p) => (
        <li key={p.id}>
          <a href="#" onClick={() => props.setPostId(p.id)}>
            {p.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;
