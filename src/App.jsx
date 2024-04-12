import { useState } from "react";
import "./App.css";
import Display from "./Display";
import List from "./List";

function App() {
  const [postId, setPostId] = useState(null);

  return (
    <main>
      <Display postId={postId} />
      <List setPostId={setPostId} />
    </main>
  );
}

export default App;
