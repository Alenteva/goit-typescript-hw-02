import ImageCard from "../imagecard/imagecard";
import css from "./imagegallery.module.css";
import { Image } from "../../App/App.types";

interface GalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery = ({ images, openModal }: GalleryProps) => {
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
