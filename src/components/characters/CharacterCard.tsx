import { Image, Trash } from "lucide-react";
import { Card, CardDescription, CardFooter } from "../ui/card";
import { Link } from "react-router";
import { Character } from "@/models/character";

const CharacterCard = (props: Character) => {
  const { id, name, image, house } = props;

  return (
    <Card className="relative flex h-[300px] w-[320px] flex-col justify-between bg-white">
      <Link
        to={`/characters/detail/${id}`}
        className="absolute inset-0 z-[9]"
      />
      <div className="relative h-1/2 rounded-t-lg">
        <div className="absolute left-6 top-0 flex h-full w-1/3 -rotate-12 items-center justify-center overflow-hidden bg-slate-200">
          {!image && <div>No Image</div>}
          {image && <img src={image} alt={name} className="object-contain" />}
        </div>
        <svg
          className="absolute -top-[6px] left-[64px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0014 18.0014L8.58736 9.41536C8.21242 9.0403 8.00179 8.53169 8.00179 8.00136C8.00179 7.47103 8.21242 6.96241 8.58736 6.58736C8.96242 6.21242 9.47103 6.00179 10.0014 6.00179C10.5317 6.00179 11.0403 6.21242 11.4154 6.58736L19.8294 15.1734C20.5792 15.9235 21.0005 16.9407 21.0005 18.0014C21.0005 19.062 20.5792 20.0792 19.8294 20.8294C19.0793 21.5792 18.062 22.0005 17.0014 22.0005C15.9407 22.0005 14.9235 21.5792 14.1734 20.8294L5.75836 12.2444C4.63305 11.119 4.00085 9.59279 4.00085 8.00136C4.00085 6.40992 4.63305 4.88367 5.75836 3.75836C6.88368 2.63304 8.40993 2.00085 10.0014 2.00085C11.5928 2.00085 13.119 2.63304 14.2444 3.75836"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
          <Trash size={20} />
        </div>
      </div>
      <CardDescription className="p-4">
        <h6 className="text-2xl font-medium text-black">{name}</h6>
      </CardDescription>
      <CardFooter className="relative flex items-center justify-end p-4">
        <div className="h-14 w-14 overflow-hidden rounded-full">
          {house && (
            <img
              src={`/images/${house.toLowerCase()}.png`}
              alt=""
              className="object-cover"
            />
          )}
          {!house && (
            <div className="flex h-full w-full items-center justify-center bg-slate-100">
              <Image />
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;
