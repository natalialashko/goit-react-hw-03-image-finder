import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
  hendleClick = () => {
    console.log(this.props.largeImageURL)
    return this.props.largeImageURL
  }
  render() {
    const { id, webformatURL,  type } = this.props;
        
  return (
    <li key={id} className={css.gallery_item}>
      <img className={css.gallery_item_img} src={webformatURL}
        alt={type} width="100" onClick={this.hendleClick} />
    </li>
  );
};
}

