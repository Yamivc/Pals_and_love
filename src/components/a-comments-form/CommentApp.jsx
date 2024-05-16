import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentData from './CommentData'; // Importa el objeto JSON de comentarios

import './CommentApp.css';

const CommentApp = () => {
  const [comments, setComments] = useState(CommentData);
  const [currentComment, setCurrentComment] = useState({ id: null, name: '', text: '' });

  const addComment = (name, text) => {
    // Agrega un nuevo comentario al estado de comentarios
    const newComment = { id: Date.now(), name, text };
    setComments([...comments, newComment]);
  };

  const updateComment = (id, name, newText) => {
    // Actualiza el comentario correspondiente en el estado de comentarios
    const updatedComments = comments.map(comment =>
      comment.id === id ? { ...comment, name, text: newText } : comment
    );
    setComments(updatedComments);
  };

  const deleteComment = (id) => {
    // Elimina el comentario correspondiente del estado de comentarios
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="app">
      <CommentForm addComment={addComment} currentComment={currentComment} updateComment={updateComment} />
      <CommentList comments={comments} setCurrentComment={setCurrentComment} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentApp;
