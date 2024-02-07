import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
   const handleSubmit = e => {
      e.preventDefault();

      if (e.target.elements.query.value.trim() === '') {
         toast.error('Enter your search query 👈');
         return;
      }

      onSearch(e.target.elements.query.value);
      e.target.reset();
   };
   return (
      <header className={css.header}>
         <form onSubmit={handleSubmit} className={css.form}>
            <input
               className={css.input}
               type="text"
               name="query"
               placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">
               Search
            </button>
         </form>
      </header>
   );
};
