import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="text-slate-50 fixed left-0 right-0 top-0 z-[9999] h-14 bg-castleton-900 py-2">
      <nav className="flex h-full w-full items-center justify-center space-x-4 px-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
