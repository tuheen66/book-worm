
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { useContext, useEffect, useState } from "react";
import { getReadBooks } from "../utilities/utilites";
import { SortContext } from "./../ListedBooks/ListedBooks";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  const sortValue = useContext(SortContext);

  console.log(sortValue);

  useEffect(() => {
    const storedReadBooks = getReadBooks();
    setReadBooks(storedReadBooks);
  }, []);

  const sortedBooks = readBooks.sort((a, b) => b[sortValue] - a[sortValue]);

  //   console.log(sortedBooks);

  console.log(readBooks);
  return (
    <div className="mt-8">
      {sortedBooks.length > 0 ? (
        sortedBooks.map((readBook) => (
          <ReadBookCard key={readBook.id} readBook={readBook}></ReadBookCard>
        ))
      ) : (
        <div className="text-center mt-20 text-4xl text-red-500 font-bold">
          <p>You do not have any books in your Read list</p>
        </div>
      )}
    </div>
  );
};

export default ReadBooks;
