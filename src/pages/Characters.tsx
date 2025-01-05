"use client";

import { Search } from "lucide-react";
import Hero from "../components/Hero";
import { Input } from "@/components/ui/input";
import CharacterCard from "@/components/characters/CharacterCard";
// import dummy from "@/data/dummy.json";
import NewCharacterForm from "@/components/characters/NewCharacterForm";
import Container from "@/components/Container";
import { useLoaderData } from "react-router";
import React, { useEffect, useRef, useState } from "react";
import { Response } from "@/models/character";

const Characters = () => {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<
    Response[] | null
  >();

  const searchRef = useRef(null);

  const data = useLoaderData();

  useEffect(() => {
    const filtered = search
      ? data.characters.filter((c: Response) =>
          c.name.toLowerCase().includes(search.toLowerCase()),
        )
      : null;
    setFilteredCharacters(filtered);
  }, [search]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchRef.current) {
      searchRef.current.blur();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
          className="mb-8 flex w-full items-center justify-center gap-4 py-4"
        >
          <div className="flex h-full min-w-[320px] max-w-[60%] items-center gap-0 overflow-hidden rounded-full bg-slate-200 px-4 py-2">
            <Search size={24} />
            <Input
              ref={searchRef}
              className="bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              onBlur={handleBlur}
              onKeyUp={handleSearch}
            />
          </div>
          <NewCharacterForm />
        </div>
        <div className="flex flex-wrap gap-4 px-8">
          {filteredCharacters
            ? filteredCharacters.map((char) => (
                <CharacterCard key={char.id} {...char} />
              ))
            : data.characters.map((char: Response) => (
                <CharacterCard key={char.id} {...char} />
              ))}
        </div>
      </section>
    </div>
  );
};

export default Characters;
