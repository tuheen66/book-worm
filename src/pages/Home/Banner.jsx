import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:px-20">
        <img
          src="https://i.ibb.co/f0m9JbH/banner.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:w-1/2  space-y-4">
          <h1 className="text-5xl font-bold ">
            Books to freshen up your bookshelf
          </h1>

          <Link  to={"/listed-books"}>
            <button className="btn bg-[#23BE0A] text-white mt-6">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
