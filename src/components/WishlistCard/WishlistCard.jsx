/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const WishlistCard = ({wishlist}) => {

    const {
        id,
        name,
        author,
        image,
        tags,
        rating,
        yearOfPublishing,
        publisher,
        category,
        totalPages,
      } = wishlist;
  return (
    <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl py-4 border-2 border-blue-100 mb-8">
      <figure className="bg-[#1313130D] mx-8 lg:w-1/4">
        <img className="lg:w-[40%] py-6" src={image} alt="Movie" />
      </figure>
      <div className=" flex-grow-0 space-y-4 py-6 px-4 text-center lg:text-start">
        <h2 className=" text-center lg:text-start text-3xl font-bold">
          {name}
        </h2>
        <p className="mb-0">
          By : <span>{author} </span>
        </p>
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 items-center">
          <div>
            <p className="flex justify-center items-center">
              Tag:
              {tags.map((tag, idx) => (
                <li
                  className="text-[#23BE0A] bg-[#23BE0A0D] py-2 px-4 rounded-xl list-none"
                  key={idx}
                >
                  # {tag}
                </li>
              ))}
            </p>
          </div>

          <div className="flex  items-center justify-center gap-4">
            <CiLocationOn className="text-xl" />
            <p>
              Year of Publishing <span>{yearOfPublishing} </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-12">
          <div className="flex items-center gap-4">
            <GoPeople className="text-xl" />
            <p>
              Publisher : <span>{publisher} </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineContactPage className="text-xl" />

            <p>
              Pages : <span>{totalPages} </span>
            </p>
          </div>
        </div>

        <div className="card-actions flex flex-col lg:flex-row items-center gap-6 mt-12">
          <p className="bg-[#328EFF26] px-4 py-2 rounded-full text-[#328EFF]">
            Category : <span>{category} </span>
          </p>
          <p className="bg-[#FFAC3326] px-4 py-2 rounded-full text-[#FFAC33]">
            Rating : <span>{rating} </span>
          </p>
          <Link to={`/book/${id}`}>
            <button className="btn btn-sm bg-[#23BE0A] text-white rounded-full border-2 border-transparent hover:border-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A]  ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
