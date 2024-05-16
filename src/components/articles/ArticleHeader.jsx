import PropTypes from 'prop-types';
import './ArticleHeader.css';

const ArticleHeader = ({ title, date }) => {
  return (
    <div className="article-header">
      <h1 className="article-title">{title}</h1>
      <div className="article-date">{date}</div>
    </div>
  );
};

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ArticleHeader;
