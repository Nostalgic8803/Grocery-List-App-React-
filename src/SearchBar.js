import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="SearchContainer">
      <svg
        id="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21 20l-4.35-4.35a8.5 8.5 0 10-1.42 1.42L20 21l1-1zm-9.5-3A6.5 6.5 0 1117 10.5 6.5 6.5 0 0111.5 17z" />
      </svg>
      <input type="text" placeholder="Search.." onChange={handleInputChange} />
    </div>
  );
}
