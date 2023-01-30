import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-slate-100 flex items-center justify-center text-center mt-4 py-8 px-4 md:rounded-xl rounded-lg">
      <div>
        <p className="text-sm text-slate-700">
          Tadnology is a YouTube channel which covers the most interesting
          topics in the web dev world.
        </p>
        <small>
          <i>LEARN. SOLVE. BUILD</i>
        </small>
        <ul className="text-slate-700 flex justify-center gap-3 mt-3">
          <li className="text-sm flex justify-center items-center gap-2 border border-slate-300 shadow-lg px-2 py-1 rounded-lg">
            <BsTwitter /> Twitter
          </li>
          <li className="text-sm flex justify-center items-center gap-2 border border-slate-300 shadow-lg px-2 py-1 rounded-lg">
            <BsGithub /> GitHub
          </li>
          <li className="text-sm flex justify-center items-center gap-2 border border-slate-300 shadow-lg px-2 py-1 rounded-lg">
            <BsYoutube /> YouTube
          </li>
        </ul>
        <p className="my-5 text-slate-500 text-xs">
          Made with React, Storyblok and TailwindCSS and dashed with ♥
        </p>
      </div>
    </footer>
  );
};

export default Footer;
