import { Link } from "react-router-dom";
import main from "../assets/main.png";

const Video = () => {
  return (
    <main className="container my-10 mx-auto flex flex-col justify-center">
      <Link
        to="/"
        className=" text-sm p-1 bg-secondary inline w-20 rounded-lg text-center text-white mx-2"
      >
        Back
      </Link>
      <header className="flex flex-col mx-2 my-4">
        <h1 className="text-4xl font-bold text-slate-700">
          Build Paper Sharing Web App
        </h1>
        <h6 className="text-sm text-slate-500 my-2">
          <span>15 August 2022</span>
        </h6>
      </header>
      <img src={main} className="object-fit w-max sm:w-48 p-4 md:w-48" />
      {/* Content */}
      <p></p>
    </main>
  );
};

export default Video;
