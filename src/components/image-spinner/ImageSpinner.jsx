import { useState } from "react";
import Spinner from "../spinner/Spinner";
import "./ImageSpinner.css";
import PropTypes from 'prop-types';

function ImageWithSpinner({ imageUrl }) {
    const [loading, setLoading] = useState(true);

    const loadHandler = () => {
        setLoading(false);
    }

    return (
        <>
            <div className={loading ? "image-with-spinner-spinner-shown" : "image-with-spinner-spinner-hidden"}>
                <Spinner />
            </div>
            <img className={loading ? "image-with-spinner-image-hidden" : "image-with-spinner-image-shown"} src={imageUrl} alt="image" onLoad={loadHandler} />
        </>

    )
}

ImageWithSpinner.propTypes = {
    imageUrl: PropTypes.string.isRequired 
};

export default ImageWithSpinner;