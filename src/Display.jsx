import React, { useEffect, useState } from "react";

function Display(props) {
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    if (props.postId) {
      const json = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/posts/${props.postId}`
        )
      ).json();
      setPost(json);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [props.postId]);

  return (
    <div id="display">
      {post !== null && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default Display;
