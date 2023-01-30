import { BsGithub, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import mong from "../assets/mong.png";
import Footer from "../components/Footer";

const Video = () => {
  return (
    <>
      <main className="container sm:w-3/4 my-10 mx-auto flex flex-col  md:px-24 ">
        <Link
          to="/"
          className=" text-sm p-1 bg-secondary inline w-20 rounded-lg text-center text-white mx-2"
        >
          Back
        </Link>
        <header className="flex flex-col mx-2 my-4">
          <h1 className="text-3xl font-bold text-slate-700">
            Build Paper Sharing Web App
          </h1>
          <h6 className="text-xs text-slate-500 my-2">
            <span>15 August 2022</span>
          </h6>
        </header>
        <img
          src={mong}
          className="object-fit sm:w-48 w-full px-2 shadow-lg md:w-5/6 md:p-0 md:ml-2"
        />
        <div className="px-5 text-slate-600 text-sm my-4 md:w-3/4 flex flex-cols gap-2">
          <a
            href="/"
            className="flex items-center text-sm border border-red-700 rounded-lg px-3 py-1 shadow-lg"
          >
            <BsYoutube className="text-red-600 mr-1" /> Watch
          </a>
          <a
            href="/"
            className="flex items-center text-sm border border-slate-700 rounded-lg px-3 py-1 shadow-lg"
          >
            <BsGithub className="text-slate-700 mr-1" /> Code
          </a>
        </div>
        {/* Content */}
        <p className="px-5 text-slate-600 text-sm my-1 md:w-3/4">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham. Where can I get some?
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Video;
