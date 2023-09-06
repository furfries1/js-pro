import React, {useRef} from 'react'
import SelectedPost from '../SelectedPostContainer/SelectedPost/SelectedPost'
import { useSelector, useDispatch } from 'react-redux'
import "./style.css"
import Post from '../Post/Post'
import { useOnClickOutside } from 'src/hooks/useOutsideClick'


const PostModal = () => {
  const posts = useSelector(({posts}) => posts)
  const modalInfo = useSelector(({modalInfo}) => modalInfo)
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => {
    if(modalInfo.isOpen) {
      setTimeout(() => dispatch({ type: "TOGGLE_MODAL", payload: modalInfo.id }), 150) 
    }
  });  
  return (
    <div className="modal" ref={modalRef}>
      {<Post post={posts[modalInfo.id -1]} size="modal" />}
    </div>
  )
}

export default PostModal
