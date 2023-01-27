export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Character extends ResourceBase {
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  error?: string;
}

export interface Info<T> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T;
  error?: string;
}
