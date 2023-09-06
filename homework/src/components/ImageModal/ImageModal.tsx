import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import './style.css'

const ImageModal = () => {
    const dispatch = useDispatch();
    const modalImg = useSelector(({modalImgInfo}) => modalImgInfo)  
  return (
    <div className='img-modal'>
        <div className='close-img-modal'  onClick={() => dispatch({ type: "TOGGLE_IMG_MODAL" })}>✖</div>
      <img src={modalImg.src} alt="modal-pic" />
    </div>
  )
}

export default ImageModal
