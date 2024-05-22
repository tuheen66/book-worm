import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const SortContext = createContext("sortedValue");

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [sortResult, setSortResult] = useState("");

  const handleSelect = (e) => {
    const sortValue = e.target.value;
    setSortResult(sortValue);
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl py-4 bg-[#1313130D]">
        Books
      </h2>

      <div className="text-center my-12 w-64 py-2 text-white rounded-lg mx-auto bg-[#23BE0A]">
        <label>Sort by :</label>
        <select className=" mx-2  bg-[#23BE0A]" onChange={handleSelect}>
          <option></option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published year</option>
        </select>
      </div>

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>

        <Link
          onClick={() => setTabIndex(1)}
          to={"wishlist"}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <SortContext.Provider value={sortResult}>
        <Outlet></Outlet>
      </SortContext.Provider>
    </div>
  );
};

export default ListedBooks;
