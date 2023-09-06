import React from 'react'
import SelectedPost from '../SelectedPostContainer/SelectedPost/SelectedPost'
import { useSelector } from 'react-redux'
import "./style.css"
import Post from '../Post/Post'


const PostModal = () => {
  const posts = useSelector(({posts}) => posts)
  const modalInfo = useSelector(({modalInfo}) => modalInfo)  
  return (
    <div className="modal">
      {<Post post={posts[modalInfo.id -1]} size="modal" />}
    </div>
  )
}

export default PostModal
