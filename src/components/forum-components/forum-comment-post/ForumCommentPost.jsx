import "./ForumCommentPost.css";

import React, { useState } from 'react';
import './ForumCommentPost.css'; // Importamos el archivo CSS

const ForumCommentPost = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = { title, author, text };
        onSave(newPost); // Llamamos a la función onSave pasando el nuevo post como argumento
        setTitle('');
        setAuthor('');
        setText('');
    };

    return (
        <div className="forum-comment-post">
            <h2>Nuevo Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Título"
                    required
                />
                <br />
                <input
                    type="text"
                    value={author}
                    onChange={handleAuthorChange}
                    placeholder="Autor"
                    required
                />
                <br />
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Texto del post"
                    rows={6}
                    required
                />
                <br />
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
};

export default ForumCommentPost;
