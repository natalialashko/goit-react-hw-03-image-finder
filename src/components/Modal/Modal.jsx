import React, { Component } from 'react';
import css from './Modal.module.css'

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
  this.props.closeModal()
}
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
                {/* this.props.cildren */}
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
