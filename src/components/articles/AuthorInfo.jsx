import PropTypes from 'prop-types';
import './AuthorInfo.css';

const AuthorInfo = ({ name, position, imageUrl }) => {
    return (
        <div className="author-info">
            <div className="author-details">
                <div className="author-name">{name}</div>
                <div className="author-position">{position}</div>
            </div>
            <div className="author-image">
                <img src={imageUrl} alt="Author" />
            </div>
        </div>
    );
};

AuthorInfo.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default AuthorInfo;
