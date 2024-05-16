import { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentData from './CommentData'; // Importa el objeto JSON de comentarios

import './CommentApp.css';

const CommentApp = () => {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem('comments');
    return storedComments ? JSON.parse(storedComments) : CommentData;
  });

  const addComment = (name, text) => {
    // Agrega un nuevo comentario al estado de comentarios
    const newComment = { id: Date.now(), name, text };
    setComments(prevComments => [...prevComments, newComment]);
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

  useEffect(() => {
    // Almacena los comentarios en el localStorage cada vez que cambian
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="app">
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} updateComment={updateComment} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentApp;
