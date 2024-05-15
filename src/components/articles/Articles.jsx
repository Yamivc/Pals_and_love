import PropTypes from 'prop-types';
import './Articles.css';


const Articles = ({ title, author, content }) => {
  return (
    <div className="news-article">
      <h1 className="title">{title}</h1>
      <h2 className="author">{author}</h2>
      <div className="content">{content}</div>
    </div>
  );
};

Articles.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};

export default Articles;
