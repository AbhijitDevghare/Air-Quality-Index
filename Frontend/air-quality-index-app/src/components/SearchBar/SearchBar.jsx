import "./SearchBar.css";
import useDebounceHook from "../../Hooks/useDebounceHook";

function SearchBar({ updateSearch }) {
  const debouncedCallback = useDebounceHook((e) =>
    updateSearch(e.target.value)
  );

  return (
    <div className="searchbar">
      <div className="search-input">
        <input
          type="search"
          placeholder="Search City"
          onChange={debouncedCallback}
        />
      </div>
    </div>
  );
}

export default SearchBar;
