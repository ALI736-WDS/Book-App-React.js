//svg
import { IoSearchSharp } from "react-icons/io5";

//style
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />
      {/* searchHandler props of Books */}
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
