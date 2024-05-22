import { FaHome, FaPhoneSquare, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div>
        <iframe
          className="mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.414332759932!2d90.38193637141114!3d23.868206518896525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1716409103887!5m2!1sen!2sbd"
          width="100%"
          height="450"
          // style="border:0;"
          allowFullScreen=""
          // loading="lazy"
          // referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="my-12 flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <FaHome className="text-3xl text-[#23BE0A]" />
            <div>
              <p className="font-semibold">
                Book Worm Online Books and Reviews
              </p>
              <p>1234 Elm Street Springfield, IL 62704 USA</p>{" "}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneSquare className="text-3xl text-[#23BE0A]" />
            <p>(555) 123-4567</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-[#23BE0A]" />
            bookworm@bookworm.com
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="mb-4 font-bold text-3xl">Contact Us</h2>

          <section className="p-6 dark:bg-gray-200 rounded-xl">
            <form className="container">
              <div className="space-y-12">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="name" className=" font-semibold  ">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                  />
                </div>

                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="email" className="font-semibold ">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <label htmlFor="textarea" className="font-semibold ">
                    Write to us
                  </label>
                  <textarea
                    id="textarea"
                    type="text"
                    placeholder="Write to us"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                  />
                </div>
                <button className="bg-[#23BE0A] text-white px-6 py-2 rounded-lg border-2 border-transparent hover:border-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A]">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
