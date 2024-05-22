import { useEffect, useState } from "react";
import BooksCard from './../BooksCard/BooksCard';




const BooksContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("../books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-x-10">
        {books.map((book) => (
          <BooksCard key={book.id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default BooksContainer;