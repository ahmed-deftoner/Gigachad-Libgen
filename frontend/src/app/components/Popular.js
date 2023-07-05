import { useEffect, useState } from "react";

const Popular = () => {
  // Initialize state for popular books
  const [popularBooks, setPopularBooks] = useState([]);

  // Fetch popular books from NY Times API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction?api-key=VeOvGjOewN1jrHtPjqSPGKqvU20EU6hg`
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
    <div>
      {/* Popular books header */}
      <div>
        <span className="text-neutral-400 text-[34.618797302246094px] font-semibold leading-10">
          Books
          <br />
        </span>
        <span className="text-neutral-700 text-[67.88999938964844px] font-semibold leading-10">
          Popular
        </span>
      </div>
      {/* Popular books grid */}
      <div className=" relative bg-white flex flex-wrap justify-center">
        {popularBooks.map((book) => (
          <div
            key={book}
            className="w-[479.27px] h-[347.92px] px-[25.56px] py-[24.85px] bg-slate-800 bg-opacity-50 rounded-3xl justify-center items-center inline-flex my-5 mx-5 backdrop-filter backdrop-blur-lg backdrop-saturate-150 drop-shadow-2xl p-6"
          >
            {/* Book cover */}
            <img
              className="w-[194.55px] h-[298.21px] rounded-3xl"
              src={book.book_image}
            />
            <div className="p-[7.10px]" />
            {/* Book details */}
            <div className="flex-col justify-start items-start gap-[30.53px] inline-flex">
              <div className="flex-col justify-start items-start flex">
                {/* Book title */}
                <div className="w-[213.01px] text-red-800 text-[22.011066436767578px] font-bold leading-10">
                  {book.title}
                </div>
                {/* Book author */}
                <div className="text-white text-[18.460893630981445px] font-light leading-9">
                  {book.author}
                </div>
              </div>
              <div className="flex-col justify-start items-end gap-[28.40px] flex">
                <div className="justify-start items-start gap-[12.78px] inline-flex"></div>
                {/* "Read this book" button */}
                <div className="px-[14.91px] py-[7.10px] bg-red-700 rounded-2xl flex-col justify-start items-end gap-[7.10px] flex">
                  <div className="text-center text-white text-[18.460893630981445px] font-medium leading-9">
                    Read this book
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
