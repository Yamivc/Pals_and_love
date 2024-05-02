import "./ForumMain.css";
import { useState } from 'react';
import CommentBox from '../forum-comment-box/ForumCommentBox';
import ForumCommentPost from '../forum-comment-post/ForumCommentPost';
import ForumPost from "../forum-post/ForumPost";

const ForumMain = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSave = (newPost) => {
    setPosts([newPost, ...posts]); // Cambiamos el orden para que el último post se muestre encima
  };

  return (
    <div className="forum-container">
      
      <ForumPost
        title={posts[0]?.title} // Mostramos solo el último post
        author={posts[0]?.author}
        text={posts[0]?.text}
      />
      <ForumCommentPost onSave={handlePostSave} />
      <CommentBox />
    </div>
  );
};

export default ForumMain;