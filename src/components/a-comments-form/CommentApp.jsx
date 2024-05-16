import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


import './CommentApp.css';

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState({ id: null, name: '', text: '' });

  const addComment = (name, text) => {
    setComments([...comments, { id: Date.now(), name, text }]);
  };

  const updateComment = (id, name, newText) => {
    setComments(comments.map(comment => (comment.id === id ? { id, name, text: newText } : comment)));
  };

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="app">
      
      <CommentForm addComment={addComment} currentComment={currentComment} updateComment={updateComment} />
      <CommentList comments={comments} setCurrentComment={setCurrentComment} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentApp;