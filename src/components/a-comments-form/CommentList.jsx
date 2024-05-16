import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentList = ({ comments, setCurrentComment, deleteComment }) => {
    return (
        <>
            {comments.map(comment => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    setCurrentComment={setCurrentComment}
                    deleteComment={deleteComment}
                />
            ))}
        </>
    );
};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    setCurrentComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
};

export default CommentList;
