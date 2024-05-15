import css from "./loadmorebtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
  hasMore: boolean;
}

const LoadMoreBtn = ({ onLoadMore, hasMore }: LoadMoreBtnProps) => {
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
