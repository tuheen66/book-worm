/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const { id, name, author, image, category, rating, tags } = book;

  return (
    <Link to={`/book/${id}`}>
      <div className="card  shadow-xl my-12 transition hover:scale-105 border-2 border-blue-100 hover:border-blue-300 ">
        <figure className="p-4 rounded-xl">
          <img
            className=" py-6 px-28 bg-[#F3F3F3] rounded-2xl"
            src={image}
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <div className="list-none flex gap-8 font-bold text-[#23BE0A]">
            {tags.map((tag, idx) => (
              <li className="px-4 py-2 rounded-xl bg-[#23BE0A0D] " key={idx}>
                {tag}
              </li>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="">
            By : <span>{author}</span>
          </p>

          <hr className="border-1 border-b border-dashed" />

          <div className="flex justify-between ">
            <p>{category}</p>
            <p className="flex justify-end items-center gap-2 mx-0">
              <span>{rating}</span> <FaRegStar />{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
