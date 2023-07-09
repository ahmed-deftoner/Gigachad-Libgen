import { useEffect, useState } from "react";

const Popular = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VeOvGjOewN1jrHtPjqSPGKqvU20EU6hg`
        );
        const data = await response.json();
        const books = data.results.books;
        setPopularBooks(books);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function handleDownload(book) {
      const search = String(book.title + " " + book.author).toLowerCase().replace(/ /g, "%")
      console.log(search)
      try {
        const response = await fetch(
          `https://fiber-production-d37b.up.railway.app/api?search=${search}&limit=1`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="popular">
      <h2>Popular</h2>
      <div className="popular-results">
        <div className="popular-result">
          {popularBooks.map((book) => (
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <img src={book.book_image} alt={book.title} />
              <button onClick={() => handleDownload(book)}>Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
