import css from "./imagecard.module.css";
import { Image } from "../../App/App.types";

export interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}
const ImageCard = ({ image, openModal }: ImageCardProps) => {
  return (
    <div onClick={() => openModal(image)}>
      <img
        className={css["img"]}
        src={image.urls.small}
        alt={image.alt_description}
        width="360"
      />
    </div>
  );
};
export default ImageCard;
