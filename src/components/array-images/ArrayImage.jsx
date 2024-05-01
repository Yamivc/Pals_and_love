import imageArray from "../../models/image-array-image-and-text/imageArrayImageAndText";
import "./ArrayImage.css";

function ImageArrayImageAndText() {
  return (
    <>
      <div className="image-array-image-and-text-wrapper">
        <div className="image-array-image-and-text-little-title">La ruta del agua de Telde</div>
        <div className="image-array-image-and-text-big-title">un proyecto, dos centros, tres logos...</div>
        <div className="image-array-image-and-text-tiny-title">un proyecto, dos centros, tres logos, dos profesores y mucho alumnado.</div>
        <div className="image-array-image-and-text-images-wrapper">
          {
            imageArray.map((image, index) => (
              <div className="image-array-image-and-text-unit" key={index}>
                <div className="image-array-image-and-text-unit-image-wrapper">
                  <img src={`/images/route/${image.src}.jpg`} alt="array image" />
                </div>
                <div className="image-array-image-and-text-unit-text">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                  <button>Leer más...</button>
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