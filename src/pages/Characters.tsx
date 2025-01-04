import { Search } from "lucide-react";
import Hero from "../components/Hero";
import { Input } from "@/components/ui/input";
import CharacterCard from "@/components/CharacterCard";
import dummy from "@/data/dummy.json";
import NewCharacterForm from "@/components/NewCharacterForm";

const Characters = () => {
  return (
    <>
      <Hero classname="bg-lavender-300">
        <h1 className="px-8 text-center text-6xl uppercase">All Characters</h1>
      </Hero>
      <section className="bg-lavender-300 pb-14">
        <div
          id="action-wrapper"
          className="flex w-full items-center justify-center gap-4 py-4"
        >
          <div className="flex h-full min-w-[320px] max-w-[60%] items-center gap-0 overflow-hidden rounded-full bg-slate-200 px-4 py-2">
            <Search size={24} />
            <Input className="bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
          <NewCharacterForm />
        </div>
        <div className="flex flex-wrap gap-4 px-8">
          {dummy.map((i) => (
            <CharacterCard key={i.id} {...i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Characters;
