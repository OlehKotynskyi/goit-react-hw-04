import css from './ImageGallery.module.css';

import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ items }) => (
   <ul className={css.list}>
      {items.map(item => (
         <li key={item.id} className={css.item}>
            <ImageCard item={item} />
         </li>
      ))}
   </ul>
);
