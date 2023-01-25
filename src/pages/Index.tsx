import main from "../assets/main.png";
import mong from "../assets/mong.png";
import recent from "../assets/drop.png";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube } from "react-icons/all";

const Home = () => {
  return (
    <main className="container my-10 mx-auto flex flex-col items-center justify-center">
      <div className="text-center my-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-700">
          My YouTube Content
        </h1>
        <p className="md:px-64 mt-1 px-10 text-xs sm:px-10 sm:text-sm text-slate-500">
          I try to manual transcript some of my YouTube videos, to explain how
          and why I did certain things
        </p>
      </div>
      <div className="my-1 flex w-full px-4">
        <input
          type="text"
          className="w-full border border-slate-100 text-xs py-2 px-4 outline-none rounded-lg sm:w-96 sm:py-3"
          placeholder="Search video..."
        />
        <button className="bg-secondary border border-secondary text-white rounded-lg ml-2 py-2 px-4 shadow-lg text-xs">
          Search
        </button>
      </div>
      <section className="grid grid-cols-1 mt-3 px-4">
        <div className="flex w-full lg:w-2/4 mx-auto border border-slate-100 px-6 py-5 flex-col md:flex-row rounded-lg my-2 ">
          <img
            src={main}
            alt=""
            className="object-fit w-20 sm:w-48 mr-4 shadow-lg md:w-48"
          />
          <div className="flex flex-col mt-2">
            <Link to="/video">
              <h3 className="font-semibold text-lg sm:text-xl text-slate-700">
                Build Web Sharing App
              </h3>
            </Link>
            <p className="sm:text-sm text-xs text-slate-500">
              Let us take a look at how we can use React and Firebase to build a
              full stack application. The app includes authentication and
              more...
            </p>
            <div className="flex flex-cols gap-2 mt-1">
              <a
                href="/"
                className="flex items-center text-sm border border-red-700 rounded-lg px-2 shadow-lg"
              >
                <BsYoutube className="text-red-600 mr-1" /> Watch
              </a>
              <a
                href="/"
                className="flex items-center text-sm border border-slate-700 rounded-lg px-2 shadow-lg"
              >
                <BsGithub className="text-slate-700 mr-1" /> Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-2/4 mx-auto border border-slate-100 px-6 py-5 flex-col md:flex-row rounded-lg my-2 md ">
          <img
            src={mong}
            alt=""
            className="object-fit w-20 sm:w-48 mr-4 shadow-lg md:w-48"
          />
          <div className="flex flex-col mt-2">
            <h3 className="text-slate-700 font-semibold text-lg sm:text-xl">
              Mongoose Operations & Relations
            </h3>
            <p className="sm:text-sm text-xs text-slate-500">
              Mongoose helps structure our database models, defining the
              relationships between them, also do data operations...
            </p>
            <div className="flex flex-cols gap-2 mt-1">
              <a
                href="/"
                className="flex items-center text-sm border border-red-700 rounded-lg px-2 shadow-lg"
              >
                <BsYoutube className="text-red-600 mr-1" /> Watch
              </a>
              <a
                href="/"
                className="flex items-center text-sm border border-slate-700 rounded-lg px-2 shadow-lg"
              >
                <BsGithub className="text-slate-700 mr-1" /> Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-2/4 mx-auto border border-slate-100 px-6 py-5 flex-col md:flex-row rounded-lg my-2 md ">
          <img
            src={recent}
            alt=""
            className="object-fit w-20 sm:w-48 mr-4 shadow-lg md:w-48"
          />
          <div className="flex flex-col mt-2">
            <h3 className="text-slate-700 font-semibold text-lg sm:text-xl">
              Store Searched Keywords
            </h3>
            <p className="sm:text-sm text-xs text-slate-500">
              As a developer, you always aim to improve UX of your apps, this
              means sometines you might want to store the recently searched
              keywords on your app...
            </p>
            <div className="flex flex-cols gap-2 mt-1">
              <a
                href="/"
                className="flex items-center text-sm border border-red-700 rounded-lg px-2 shadow-lg"
              >
                <BsYoutube className="text-red-600 mr-1" /> Watch
              </a>
              <a
                href="/"
                className="flex items-center text-sm border border-slate-700 rounded-lg px-2 shadow-lg"
              >
                <BsGithub className="text-slate-700 mr-1" /> Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
