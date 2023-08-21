import React from "react";
import { IPost } from "src/types/types";

const SelectedPost = ({ post }: IPost) => {
  const { date, title, image, text, description, lesson_num, author, size } = post;
  return (
    <div className="selected-post">
      <div className="title-container">
        <div className="selected-post-date">{date}</div>
        <div className="selected-post-title">{title}</div>
      </div>
      <img src={image} alt="img" className="selected-post-img" />
      <div className="selected-post-text">
        {" "}
        {text} {description} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. In autem tempore reprehenderit ex sed aspernatur laudantium
        doloribus! Omnis iure, consectetur pariatur, quisquam ducimus veritatis
        aliquid, ipsam id libero quidem architecto? Eius dolor deserunt, modi
        quibusdam pariatur possimus. Possimus quo atque illo rem id, quasi sint,
        nihil delectus tempore perspiciatis earum illum, dignissimos suscipit
        ducimus explicabo veniam quae. Fugit, suscipit necessitatibus! Fugit
        harum eum dolores fugiat consequuntur eveniet molestiae beatae. Ut illum
        omnis illo eligendi facere vel porro excepturi sapiente perspiciatis et,
        est soluta asperiores voluptates qui similique, sunt iure id. Nisi harum
        voluptatum sunt, alias iusto quos officiis amet iure repellendus sequi
        tenetur adipisci vitae veniam ipsum rem! Vel modi voluptatem sint error
        deleniti fuga fugiat quisquam praesentium atque dolore. Laboriosam
        aperiam amet laudantium aut itaque facere exercitationem delectus in!
      </div>
      <div className="selected-post-footer">
        <div className="like-container">
          <div className="like"></div>
          <div className="dislike"></div>
        </div>
        <div className="fav"></div>
      </div>
      <div className="nav-container">
        <div className="prev"></div>
        <div className="next"></div>
      </div>
    </div>
  );
};

export default SelectedPost;
