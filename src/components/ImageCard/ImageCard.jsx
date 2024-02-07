import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
   const [modalIsOpen, setIsOpen] = useState(false);

   const openModal = () => {
      setIsOpen(true);
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   return (
      <div className={css.wrapperImg}>
         <img
            className={css.img}
            src={item.urls.small}
            alt={item.description}
            width={250}
            onClick={openModal}
         />
         <ImageModal isOpen={modalIsOpen} closeModal={closeModal} item={item} />
      </div>
   );
};
