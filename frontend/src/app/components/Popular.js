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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
