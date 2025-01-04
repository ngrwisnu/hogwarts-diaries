import { Search } from "lucide-react";
import Hero from "../components/Hero";
import { Input } from "@/components/ui/input";
import CharacterCard from "@/components/characters/CharacterCard";
import dummy from "@/data/dummy.json";
import NewCharacterForm from "@/components/characters/NewCharacterForm";
import Container from "@/components/Container";

const Characters = () => {
  return (
    <div className="min-h-screen bg-lavender-300">
      <Hero>
        <Container classname="md:flex md:justify-center md:items-center">
          <h1 className="text-center text-2xl uppercase sm:text-4xl md:max-w-[60%] lg:text-6xl">
            All Characters
          </h1>
        </Container>
      </Hero>
      <section className="pb-14">
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
    </div>
  );
};

export default Characters;
