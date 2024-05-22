import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBooks, saveWishlist } from "../../utilities/utilities";



const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find((book) => book.id == id);

    const {
        image,
        name,
        author,
        category,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
        review,
      } = book;

      const handleRead = (book) => {
        saveReadBooks(book);
      };
    
      const handleWishlist = (book) => {
        saveWishlist(book);
      };
    

    return (
        <div className="lg:flex gap-8 mt-4 mb-12">
      <div className="lg:w-1/2 flex justify-center items-center p-12 bg-gray-200 rounded-xl mb-4">
        <img className="w-[75%]" src={image} alt="" />
      </div>
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="font-semibold">By : {author}</p>
        <hr />
        <p>{category} </p>
        <hr />
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>

        <div className="list-none flex items-center gap-4">
          <span className="font-bold">Tag :</span>
          {tags.map((tag, idx) => (
            <li
              className="text-[#23BE0A] bg-[#23BE0A0D] py-2 px-4 rounded-xl"
              key={idx}
            >
              # {tag}
            </li>
          ))}
        </div>
        <hr />
        <p className="grid grid-cols-2">
          <span>Number of Pages :</span>{" "}
          <span className="font-bold">{totalPages} </span>
        </p>
        <p className="grid grid-cols-2">
          <span>Publisher :</span>{" "}
          <span className="font-bold">{publisher} </span>
        </p>
        <p className="grid grid-cols-2">
          <span>Year of Publishing : </span>
          <span className="font-bold">{yearOfPublishing}</span>
        </p>
        <p className="grid grid-cols-2">
          <span>Rating :</span> <span className="font-bold">{rating} </span>
        </p>

        <div>
          <button
            onClick={() => handleRead(book)}
            className="btn border-1 border-[#50B1C9] bg-white px-6 mr-4 hover:bg-[#50B1C9] hover:text-white "
          >
            Read
          </button>

          <button
            onClick={() => handleWishlist(book)}
            className="btn border-1 bg-[#50B1C9] text-white  hover:bg-white hover:text-black hover:border-1 hover:border-[#50B1C9] "
          >
            Wishlist
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>)
};

export default BookDetails;