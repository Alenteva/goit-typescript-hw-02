import css from "./imagecard.module.css";

const ImageCard = ({ image, openModal }) => {
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
