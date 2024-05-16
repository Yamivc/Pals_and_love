import { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { db } from '../../firebase';
import './CommentApp.css';

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState({ id: null, name: '', text: '' });

  // Función para obtener los comentarios de la base de datos Firestore
  const fetchComments = async () => {
    const snapshot = await db.collection('comments').get();
    const fetchedComments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setComments(fetchedComments);
  };

  // useEffect para obtener los comentarios al cargar el componente
  useEffect(() => {
    fetchComments();
  }, []);

  // Función para agregar un nuevo comentario a la base de datos
  const addComment = async (name, text) => {
    try {
      // Agrega un nuevo documento a la colección 'comments' con el nombre y el comentario proporcionados
      await db.collection('comments').add({
        name: name,
        text: text
      });
      // Actualiza la lista de comentarios para reflejar el nuevo comentario
      fetchComments();
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  // Función para eliminar un comentario de la base de datos
  const deleteComment = async (id) => {
    try {
      // Elimina el documento correspondiente al ID proporcionado de la colección 'comments'
      await db.collection('comments').doc(id).delete();
      // Actualiza la lista de comentarios para reflejar la eliminación del comentario
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment: ', error);
    }
  };

  return (
    <div className="app">
      <CommentForm addComment={addComment} currentComment={currentComment} />
      <CommentList comments={comments} setCurrentComment={setCurrentComment} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentApp;
