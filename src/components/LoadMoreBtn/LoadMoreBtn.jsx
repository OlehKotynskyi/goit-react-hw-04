import css from './LoadMoreBtn.module.css';
export const LoadMoreBtn = ({ LoadMore }) => {
   return (
      <div className={css.loadMore}>
         <button className={css.loadMoreBtn} onClick={LoadMore}>
            Load more
         </button>
      </div>
   );
};
