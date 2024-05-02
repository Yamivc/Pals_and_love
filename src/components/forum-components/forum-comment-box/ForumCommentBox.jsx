import "./ForumCommentBox.css";
import React, { useState } from 'react';

const CommentBox = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = { name, comment };
        setComments([...comments, newComment]);
        setName(''); // Limpiamos el campo de nombre
        setComment(''); // Limpiamos el campo de comentario
    };

    return (
        <div className="comment-box-container"> {/* Modificamos la clase para centrar */}
            <h2>Comentarios</h2>
            <ul>
                {comments.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}:</strong> {item.comment}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Tu nombre"
                    required
                />
                <br />
                <textarea
                    value={comment}
                    onChange={handleChange}
                    placeholder="Escribe tu comentario aquí..."
                    rows={4}
                    cols={50}
                    required
                />
                <br />
                <button type="submit">Enviar comentario</button>
            </form>
        </div>
    );
};

export default CommentBox;
