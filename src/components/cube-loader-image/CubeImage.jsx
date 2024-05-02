import { useState } from "react";
import CubeLoader from "../cube-loader/CubeLoader";
import "./CubeImage.css";
import PropTypes from 'prop-types';

function CubeImage({ imageUrl }) {
    const [loading, setLoading] = useState(true);

    const loadHandler = () => {
        setLoading(false);
    }

    return (
        <>
            <div className={loading ? "image-with-cube-cube-shown" : "image-with-cube-cube-hidden"}>
                <CubeLoader />
            </div>
            <img className={loading ? "image-with-cube-image-hidden" : "image-with-cube-image-shown"} src={imageUrl} alt="image" onLoad={loadHandler} />
        </>

    )
}

CubeImage.propTypes = {
    imageUrl: PropTypes.string.isRequired 
};

export default CubeImage;