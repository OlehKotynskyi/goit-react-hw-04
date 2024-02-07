import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fechGallery } from '../api';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

export const App = () => {
   const [query, setQuery] = useState('');
   const [page, setPage] = useState(1);
   const [gallery, setGallery] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [showBtn, setShowBtn] = useState(false);

   const searchGallery = async newQuery => {
      setQuery(`${Date.now()}/${newQuery}`);
      setPage(1);
      setGallery([]);
   };

   const handleLoadMore = () => {
      setPage(page + 1);
   };

   useEffect(() => {
      if (!query) return;

      async function fetchData() {
         try {
            setLoading(true);
            setError(false);
            await new Promise(resolve => setTimeout(resolve, 9000));
            const fetchedData = await fechGallery(query.split('/')[1], page);
            if (page === 1 && fetchedData.length === 0) {
               setShowBtn(false);
            } else {
               setShowBtn(true);
            }
            setGallery(prevGallery => [...prevGallery, ...fetchedData]);
         } catch (error) {
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, [query, page]);

   return (
      <>
         <SearchBar onSearch={searchGallery} />
         {error && <ErrorMessage message="Sorry, something went wrong, try again later 🤷‍♀️" />}
         {gallery.length > 0 && <ImageGallery items={gallery} />}
         {loading && <Loader />}
         {showBtn && !loading && <LoadMoreBtn LoadMore={handleLoadMore} />}
         <Toaster position="top-right" />
      </>
   );
};
