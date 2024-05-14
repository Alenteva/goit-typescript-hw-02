import Modal from "react-modal";
import css from "./imagemodal.module.css";

const ImageModal = ({ isOpen, image, onRequestClose }) => {
  return (
    <Modal
      className={css.ReactModal__Content}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <img
        className={css.imgRegular}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;
