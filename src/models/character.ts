export interface Character {
  id: string;
  name: string;
  alternate_names?: string[];
  image?: string;
  house: string;
  species: string;
  gender: string;
  dateOfBirth?: string;
}
