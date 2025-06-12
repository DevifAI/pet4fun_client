
const Search = () => {
  return (
    <div className="search-section">
      <div className="container">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search your orders here"
          />
          <button className="search-btn">
            <i className="fas fa-search"></i> Search Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
