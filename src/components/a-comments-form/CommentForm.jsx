import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ addComment, currentComment, updateComment }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentComment && currentComment.id) {
      setName(currentComment.name);
      setText(currentComment.text);
    } else {
      setName('');
      setText('');
    }
  }, [currentComment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentComment && currentComment.id) {
      updateComment(currentComment.id, name, text);
    } else {
      addComment(name, text);
    }
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="comment-input"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment"
        required
        className="comment-input"
      />
      <button type="submit" className="comment-button">
        {currentComment && currentComment.id ? 'Update' : 'Comment'}
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  currentComment: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    text: PropTypes.string
  }),
  updateComment: PropTypes.func.isRequired,
};

export default CommentForm;
