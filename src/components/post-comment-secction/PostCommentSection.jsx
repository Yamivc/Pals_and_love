import { useState } from 'react';
import PropTypes from 'prop-types';
import './PostCommentSection.css';

const PostCommentSection = ({ postCommentSubmit }) => {
    const [author, setAuthor] = useState(''); // Nuevo estado para almacenar el autor
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (commentText.trim() !== '') {
            postCommentSubmit(author, commentText); // Enviar autor y comentario
            setAuthor(''); // Limpiar el campo de autor después de enviar
            setCommentText(''); // Limpiar el campo de comentario después de enviar
        }
    };

    return (
        <div className="comment-section">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="author"
                    value={author}
                    placeholder="Your name"
                    onChange={(e) => setAuthor(e.target.value)} // Actualizar el estado del autor
                    required
                />
                <textarea
                    name="comment"
                    value={commentText}
                    placeholder="Write your comment..."
                    onChange={(e) => setCommentText(e.target.value)} // Actualizar el estado del comentario
                    required
                />
                <button type="submit">Comment</button>
            </form>
        </div>
    );
};

PostCommentSection.propTypes = {
    postCommentSubmit: PropTypes.func.isRequired,
};

export default PostCommentSection;
