import { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    try {
      const response = await fetch(
        `https://fiber-production-d37b.up.railway.app/api?search=${searchTerm}&limit=5`
      );
      const data = await response;
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>

      <div className="search-results">
        {searchResults.map((result) => (
          <div className="search-result">
            <h3>{"result.title"}</h3>
            <p>{"result.description"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
