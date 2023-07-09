import { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    const search = String(searchTerm).toLowerCase().replace(/ /g, "%")
    console.log(search)
    try {
      const response = await fetch(
        `https://fiber-production-d37b.up.railway.app/api?search=${search}&limit=5`
      );
      const data = await response.json();
      console.log(data.results);
      setSearchResults(data.results);
    } catch (error) {
      console.log(error);
    }
    console.log(searchResults)
  };

  async function handleDownload(md5) {

    console.log(md5)
    try {
      const response = await fetch(
        `https://fiber-production-d37b.up.railway.app/api/link?hash=${md5}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

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
        {searchResults.map((result, id) => (
          <div key={id} className="search-result">
            <h3>{result.Title}</h3>
            <p>{result.Author}</p>
            <button onClick={() => handleDownload(result.Md5)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
