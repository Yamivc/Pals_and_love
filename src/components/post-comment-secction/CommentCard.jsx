import PropTypes from 'prop-types';
import './CommentCard.css'; 

const CommentCard = ({ author, comment }) => {
  return (
    <div className="comment-card">
      <div className="comment-details">
        <div className="comment-author">{author}</div>
        <div className="comment-text">{comment}</div>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default CommentCard;
