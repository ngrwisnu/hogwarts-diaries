import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex min-w-full justify-between bg-castleton-900 px-8 py-8 text-lavender-100">
      <h6 className="text-2xl">
        Hogwarts <br /> Diaries
      </h6>
      <div className="">
        <div className="">References</div>
        <div className="flex flex-col gap-2 text-slate-400">
          <Link to="https://hp-api.herokuapp.com/">API</Link>
        </div>
      </div>
      <div className="">
        <div className="">Contact</div>
        <div className="flex flex-col gap-2 text-slate-400">
          <Link to="https://github.com/ngrwisnu/hogwarts-diaries">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
