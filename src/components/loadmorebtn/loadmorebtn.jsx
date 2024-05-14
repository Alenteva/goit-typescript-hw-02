import css from "./loadmorebtn.module.css";

const LoadMoreBtn = ({ onLoadMore, hasMore }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <div className={css["boxBtn"]}>
      <button className={css["loadMoreBtn"]} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
