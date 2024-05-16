import PropTypes from 'prop-types';

const CommentItem = ({ comment, setCurrentComment, deleteComment }) => {
    return (
        <p className="comment-item">
            <p><strong>{comment.name}</strong></p>
            <p>{comment.text}</p>
            <button onClick={() => setCurrentComment(comment)} className="comment-button">Edit</button>
            <button onClick={() => deleteComment(comment.id)} className="comment-button">Delete</button>
        </p>
    );
};

CommentItem.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    setCurrentComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
};

export default CommentItem;
