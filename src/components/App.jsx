import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal'
import  css  from './App.module.css'


export class App extends Component {
  state = {
    currentValueSearch: '',
  isShowModal:false,
  };

  handleFormSubmit = currentValueSearch => {
    
    this.setState({ currentValueSearch });
  };

  showModal = () => {

    this.setState({isShowModal: true})
  }

  closeModal = () => {
    this.setState({isShowModal: false})
  }

  render() {
    const { currentValueSearch} = this.state;
      // console.log('currentValueSearch в APP-',this.state.currentValueSearch);
    return (
      <div className={css.app}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Searchbar functionCurrentValueSearch={this.handleFormSubmit} />
        <ImageGallery currentValueSearch={currentValueSearch} />
        {this.state.isShowModal && <Modal closeModal={this.closeModal}/>}
      </div>
    );
  }
}
