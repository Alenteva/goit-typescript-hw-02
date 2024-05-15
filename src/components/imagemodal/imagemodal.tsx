import Modal from "react-modal";
import css from "./imagemodal.module.css";
import { RegularImage, SmallImage } from "../../App/App.types";

interface ModalProps {
  isOpen: boolean;
  image: RegularImage | SmallImage;
  onRequestClose: () => void;
}

const ImageModal = ({ isOpen, image, onRequestClose }: ModalProps) => {
  const isRegularImage = "regular" in image.urls;
  return (
    <Modal
      className={css.ReactModal__Content}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <img
        className={css.imgRegular}
        src={
          isRegularImage
            ? (image.urls as RegularImage["urls"]).regular
            : (image.urls as SmallImage["urls"]).small
        }
        alt={image.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;
