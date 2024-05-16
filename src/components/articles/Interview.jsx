import PropTypes from 'prop-types';
import './Interview.css';

const Interview = ({ personName, occupation, quote }) => {
    return (
        <div className="interview">
            <h3 className="person-name">{personName}</h3>
            <h4 className="occupation">{occupation}</h4>
            <p className="quote">{quote}</p>
        </div>
    );
};

Interview.propTypes = {
    personName: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
};

export default Interview;
