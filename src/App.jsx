import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
// import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import ImageGallery from "./components/imagegallery/imagegallery";
import LoadMoreBtn from "./components/loadmorebtn/loadmorebtn";
import ImageModal from "./components/imagemodal/imagemodal";
import Loader from "./components/loader/loader";
import ErrorMessage from "./components/errormessage/errormessage";
import css from "./App.module.css";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "xS__PftDm3G6MIe5memPHnZa2TFBYAxs4wRjrvOk5E8";

function App() {
  const [images, setImages] = useState([]); // Стан для зберігання списку зображень
  const [page, setPage] = useState(1); // Стан для зберігання поточної сторінки результатів
  const [loading, setLoading] = useState(false); // Стан для відображення завантаження
  const [error, setError] = useState(false); // Стан для відображення помилки
  const [selectedImage, setSelectedImage] = useState(null); // Стан для зберігання вибраного зображення
  const [searchQuery, setSearchQuery] = useState(""); // Стан для зберігання поточного пошукового запиту
  const [isSearching, setIsSearching] = useState(false); // Стан для відображення процесу пошуку нових зображень

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsSearching(true);
        setLoading(true);
        setError(null);

        if (searchQuery.trim() === "") {
          toast("Еnter your request!", {
            icon: "✍",
          });
          return;
        }
        const params = {
          query: searchQuery,
          page: page,
          per_page: 15,
          client_id: ACCESS_KEY,
        };
        const response = await axios.get(
          `search/photos/?${new URLSearchParams(params).toString()}`
        );
        const { data } = response;

        if (data.total === 0) {
          toast.error(
            "Sorry, we have not found the photos for your request. Try to write it differently.",
            { duration: 5000 }
          );
          return;
        }
        setImages((prevImages) =>
          page === 1 ? data.results : [...prevImages, ...data.results]
        );
        toast.success(`Wow! We found ${data.total} pictures`);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setIsSearching(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const handleSubmit = (search) => {
    if (!search.trim()) {
      toast.error("The search field cannot be empty!");
    } else {
      setPage(1);
      setSearchQuery(search);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    if (image) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => {
    if (selectedImage) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className={css["app"]}>
        <SearchBar onSubmit={handleSubmit} />{" "}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: css.toastTextCenter,
          }}
        />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}{" "}
        <ImageGallery images={images} openModal={openModal} />
        <LoadMoreBtn
          onLoadMore={handleLoadMore}
          hasMore={!loading && images.length > 0 && !isSearching}
        />
        {selectedImage !== null && (
          <ImageModal
            isOpen={true}
            image={selectedImage}
            onRequestClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
