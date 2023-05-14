import React from 'react';
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li key={id} className={css.gallery_item}>
      <img className={css.gallery_item_img}src={webformatURL} alt="" width="100" />
    </li>
  );
};
