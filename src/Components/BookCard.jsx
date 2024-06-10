import { useState } from "react";

//svg
import { AiFillHeart } from "react-icons/ai";

//style
import styles from "./BookCard.module.css";

function BookCard({ data, handleLikeList }) {
  //chun data dar props destructure shode pas error mide va be khode data dastresi nadarim pas besurate zir destructure mikonim
  const { title, author, image, language, pages } = data;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikeList(data, like);
    setLike((like) => !like); //chun in async hast va dirtar true false mishe pas miad line paien
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3> {title} </h3>
        <p> {author} </p>
        <div>
          <span> {language} </span>
          <span> {pages} </span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
        {/* icon Like */}
      </button>
    </div>
  );
}

export default BookCard;
