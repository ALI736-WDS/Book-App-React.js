import { useState } from "react";

//Components
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

//style
import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikeList = (book, status) => {
    // console.log(book, status);
    if (status) {
      const newLikeList = liked.filter((i) => i.id !== book.id); //hem item haro mide be joz oni ke unlike kordim
      setLiked(newLikeList);
    } else {
      setLiked((liked) => [...liked, book]); //vaghti karbar like kone in ejra mishe
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      {/* to SearchBox */}
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikeList={handleLikeList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4> Favorite </h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
        {/* vaghti !! bezarim, 0 ke false hast va dar safhe neshun dade mishe 
      ro tabdil be booolian mikone va khode true false mishe */}
      </div>
    </>
  );
}

export default Books;
