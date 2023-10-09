import React, { useState } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import Input from "../Input/Input";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { ADD_POST } from "src/actions/actions";
import ImageUploading from "react-images-uploading";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [lesson_num, setLessonNum] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleSubmit = () => {
    dispatch(
      ADD_POST({
        image: images,
        text,
        lesson_num: +lesson_num,
        title,
        description,
      })
    );
    navigate("/myposts");
  };

  return (
    <PageTemplate title="Add new post">
      <form onSubmit={(e) => e.preventDefault()} action="/blog">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <Input
          label="Text:"
          placeholder="text"
          type="text"
          value={text}
          onChange={setText}
        />
        <Input
          label="Lesson number:"
          placeholder="number"
          type="number"
          value={lesson_num}
          onChange={setLessonNum}
        />
        <Input
          label="Title:"
          placeholder="title"
          type="text"
          value={title}
          onChange={setTitle}
        />
        <Input
          label="Description:"
          placeholder="discription"
          type="text"
          value={description}
          onChange={setDescription}
        />
        <button className="form-button" onClick={() => handleSubmit()}>
          Add Post
        </button>
      </form>
    </PageTemplate>
  );
};

export default AddPost;
