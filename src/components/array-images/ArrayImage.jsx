import imageArray from "../../models/image-array-image-and-text/imageArrayImageAndText";
import "./ArrayImage.css";
import ImageSpinner from "../image-spinner/ImageSpinner";
import { Link } from 'react-router-dom';



function ImageArrayImageAndText() {
  return (
    <>
      <div className="image-array-image-and-text-wrapper">
        <div className="image-array-image-and-text-little-title"><h1>Information To The Power</h1></div>
        <div className="image-array-image-and-text-images-wrapper">
          {
            imageArray.map((image, index) => (
              <div className="image-array-image-and-text-unit" key={index}>
                <div className="image-array-image-and-text-unit-image-wrapper">
                  <ImageSpinner imageUrl={`src/images/${image.src}.jpg`} alt="array image" />
                </div>
                <div className="image-array-image-and-text-unit-text">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                  <Link to="/learn-more">
                    <button>Read More...</button>
                  </Link>

                </div>
              </div>
            ))
          }
        </div>
      </div >
    </>
  )
}

export default ImageArrayImageAndText;