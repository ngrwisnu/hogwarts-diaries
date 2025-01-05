import { Character, Response } from "@/models/character";

export const formattedResponse: (data: Response) => Character = (data) => ({
  id: data.id,
  name: data.name,
  alternate_names: data.alternate_names,
  gender: data.gender,
  image: data.image,
  house: data.house,
  species: data.species,
  dateOfBirth: data.dateOfBirth,
});
