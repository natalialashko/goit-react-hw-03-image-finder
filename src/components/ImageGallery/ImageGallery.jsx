import React, { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import css from './ImageGallery.module.css'

export class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
   visible: true,
    error: null,
    status: 'idle',
  };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.currentValueSearch;
        const nextName = this.props.currentValueSearch;
    if (prevName !== nextName) {
      console.log('Змінились параметри пошуку');
      console.log('prevProps.currentValueSearch:', prevName);
      console.log('this.props.currentValueSearch:', nextName);
      
      this.setState({ status: 'pending' });
     
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              `Згідно Вашого запиту ${nextName} картинки відсутні, введіть новий запит`
            )
          );
        })
        .then(images => this.setState({ images: images.hits , status: 'resolved', visible: true, currentPage:1}))
        .catch(error => this.setState({ error, status: 'rejected', visible: false  }))
       
    }
  }
  fetchImages = () => {
    const currentPage = this.state.currentPage;
    const nextName = this.props.currentValueSearch;
    const arrayImage = this.state.images;
    console.log('this.state.currentPage', currentPage);
    console.log('nextName', nextName);
    console.log('arrayImage', arrayImage);

    fetch(
      `https://pixabay.com/api/?q=${nextName}&page=${currentPage}&key=34821282-c80c361baf29d3d77b8526c1f&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(
            `Згідно Вашого запиту ${nextName} картинки відсутні, введіть новий запит`
          )
        );
      })
      .then(images => this.setState({ images:[...arrayImage, ...images.hits], status: 'resolved', visible: true }))
      .catch(error => this.setState({ error, status: 'rejected',visible: false }));
    console.log(this.state.images)
   
  }

  hendleLoadMoreClick = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      visible: true,
    }), this.fetchImages);
  }

  render() {
    const { images, error, status, visible } = this.state;
    // const { currentValueSearch } = this.props;
    if (status === 'idle') {
      return <div>Введіть параметри пошуку</div>;
    }
    if (status === 'pending') {
      return <div>Іде загрузка...</div>;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={css.gallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
              />
            ))}
          </ul>
          <Button  onClick={this.hendleLoadMoreClick} visible={visible}/>
        </>
      );
    }
  
  }
}
