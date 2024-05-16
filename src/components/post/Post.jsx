import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import CommentApp from '../a-comments-form/CommentApp'; // Importa el componente CommentApp
import './Post.css';

const Post = ({ author, subredittitle, hour, title, description, imageUrl }) => {
    const [showComments, setShowComments] = useState(false); // Estado para controlar la visualización de los comentarios

    // Función para manejar el click en el icono de comentarios
    const handleCommentsClick = () => {
        setShowComments(!showComments);
    };

    return (
        <div className="post-container">
            <div className="post-item">
                <div className="post-header">
                    <span className="post-subreddit">r/{subredittitle}</span>
                    <span className="post-time">{hour} h </span>
                    <button className="join-button">join</button>
                </div>
                <div className="post-content">
                    <div className="post-info">
                        <span className="post-author">Posted by {author}</span>
                        <p className="post-title">{title}</p>
                        <p className="post-description">{description}</p>
                    </div>
                    <img src={imageUrl} alt="Post" className="post-image" />
                </div>
                <div className="post-footer">
                    {/* Icono de comentarios con onClick para mostrar/ocultar comentarios */}
                    <div className="comments" onClick={handleCommentsClick}>
                        <FontAwesomeIcon icon={faComments} className="comment-icon" />
                    </div>
                    <button className="share-button">
                        <FontAwesomeIcon icon={faShareAlt} className="share-icon" />
                        Compartir
                    </button>
                </div>
                {/* Renderiza la sección de comentarios si showComments es true */}
                {showComments && (
                    <div className="comments-section">
                        <CommentApp />
                    </div>
                )}
            </div>
        </div>
    );
};

Post.propTypes = {
    subredittitle: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default Post;
