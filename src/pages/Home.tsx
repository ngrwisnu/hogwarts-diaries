import { Button } from "@/components/ui/button";
import Hero from "../components/Hero";
import { Link } from "react-router";

const Home = () => {
  return (
    <Hero classname="text-black bg-lavender-100 min-h-screen flex flex-col justify-center">
      <h1 className="mb-4 px-8 text-center text-6xl uppercase">
        Find Your Fav Iconic Characters
      </h1>
      <p className="mx-auto max-w-[60%] text-center">
        This website is your gateway to learning about the beloved characters
        from the Harry Potter movies
      </p>
      <div className="mt-8 flex justify-center">
        <Button className="rounded-full" asChild>
          <Link to="/characters">Find Characters</Link>
        </Button>
      </div>
    </Hero>
  );
};

export default Home;
