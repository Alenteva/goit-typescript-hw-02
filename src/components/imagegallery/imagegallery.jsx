import ImageCard from "../imagecard/imagecard";
import css from "./imagegallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <ul className={css["imageGallery"]}>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
