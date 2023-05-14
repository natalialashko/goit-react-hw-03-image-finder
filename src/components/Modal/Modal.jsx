import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {

  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.hendlePressESC)
  }
  componentWillUnmount() {
   window.removeEventListener('keydown', this.hendlePressESC)
}

  hendlePressESC = (e) => {
    if (e.code === 'Escape')
  this.props.onClick()
}
  render() {
     console.log('пропс на модалці--',this.prop) ;
    return createPortal(
     <div className={css.overlay}>
        <div className={css.modal}>
                {/* {this.props.cildren } */}
          <img src="" alt="" />
        </div>
      </div>, modalRoot

    );
  }
}

 