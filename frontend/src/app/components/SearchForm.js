import { useState } from "react";

// Define a React component called SearchForm
const SearchForm = () => {
  // Define two state variables using the useState hook
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [downloadLink, setDownloadLink] = useState("");

  // Define an async function to handle the search
  const handleSearch = async () => {
    try {
      // Fetch data from an API using the searchTerm state variable
      const response = await fetch(
        `https://fiber-production-d37b.up.railway.app/api?search=${searchTerm}&limit=5`
      );
      // Parse the response data and update the searchResults state variable
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Define a function to handle changes to the search input
  const handleChange = (e) => {
    // Update the searchTerm state variable with the new value
    setSearchTerm(e.target.value);
  };

  const getDownloadLink = async (book) => {
    try {
      const response = await fetch(
        `https://fiber-production-d37b.up.railway.app/api/link?hash=${book.Md5}`
      );
      const data = await response.json();
      console.log(data);
      setDownloadLink(data.downloadURL);
    } catch (error) {
      console.log(error);
    }
  };

  // Render the search form and search results
  return (
    <div className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <span className="text-neutral-400 text-4xl font-semibold leading-10">
          Books
          <br />
        </span>
      </div>

      <div className="relative bg-white flex flex-wrap justify-center">
        {/* Map over the searchResults array and render a book for each result */}
        {searchResults.map((book) => (
          <div
            key={book.ID}
            className="flex flex-col bg-slate-800 bg-opacity-50 rounded-3xl justify-center items-center my-5 mx-5 backdrop-filter backdrop-blur-lg backdrop-saturate-150 drop-shadow-2xl"
            style={{ flex: "1 1 300px" }}
          >
            {/* Render the book cover image */}
            <img
              className="w-full h-64 rounded-t-3xl object-cover"
              src={`https://covers.openlibrary.org/b/id/${book.CoverID}-L.jpg`}
              alt={book.Title}
              style={{ height: "300px" }}
            />
            <div className="p-2 flex-grow">
              <div className="text-red-800 text-2xl font-bold leading-10 overflow-hidden whitespace-nowrap text-center text-overflow-ellipsis">
                {book.Title}
              </div>
              <div className="text-white text-lg font-light leading-9 overflow-hidden whitespace-nowrap text-center text-overflow-ellipsis">
                {book.Author}
              </div>
            </div>
            <div className="px-4 py-2 bg-red-700 rounded-b-2xl w-full text-center text-white text-lg font-medium leading-9">
              {/* Render a button to read the book */}
              <a
                onClcick={getDownloadLink(book)}
                href={{ downloadLink }}
                target="_blank"
                rel="noreferrer"
              >
                Download this book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the SearchForm component
export default SearchForm;
