"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { RequestCharacter } from "@/models/character";

const NewCharacterForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [alternateNames, setAlternateNames] = useState<string[]>([]);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [house, setHouse] = useState("");

  const handleSubmit = () => {
    const id = new Date().getTime().toString();

    const data: RequestCharacter = {
      id,
      name,
      alternate_names: alternateNames,
      gender,
      species,
      house,
      dateOfBirth: "",
      yearOfBirth: 0,
      wizard: false,
      ancestry: "",
      eyeColour: "",
      hairColour: "",
      wand: {
        wood: "",
        core: "",
        length: 0,
      },
      patronus: "",
      hogwartsStudent: false,
      hogwartsStaff: false,
      actor: "",
      alternate_actors: [],
      alive: true,
      image: "",
    };

    console.log(data);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full">New Wizard</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-['Poppins'] text-2xl">
            Add your own character
          </DialogTitle>
          <DialogDescription>
            Write the details here. Don't forget to click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="alternate" className="text-right">
              Alternate names
            </Label>
            <Input
              id="alternate"
              placeholder="alias 1, alias 2"
              onBlur={(e) =>
                setAlternateNames((prev) => [
                  ...prev,
                  ...e.target.value.split(","),
                ])
              }
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="species" className="text-right">
              Species
            </Label>
            <Select onValueChange={(value) => setSpecies(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a species" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="human">Human</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="house" className="text-right">
              House
            </Label>
            <Select onValueChange={(value) => setHouse(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="List of Houses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gryffindor">Gryffindor</SelectItem>
                <SelectItem value="slytherin">Slytherin</SelectItem>
                <SelectItem value="ravenclaw">Ravenclaw</SelectItem>
                <SelectItem value="hufflepuff">Hufflepuff</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCharacterForm;
