import React from 'react';
import './ForumPost.css'; 

const ForumPost = ({ title, author, text }) => {
  return (
    <div className="forum-post-container">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  );
};

export default ForumPost;
