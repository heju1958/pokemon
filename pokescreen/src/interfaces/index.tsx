import { ReactNode, SetStateAction } from "react";

export interface IPokemonContext {
  arrayFilter: IPoke[];
  pokeItem: IPoke;
  setPokeItem: React.Dispatch<SetStateAction<IPoke>>;
  setSearch: (data: string) => void;
}

export interface IPokemonProps {
  children: ReactNode;
}

export interface IPoke {
  id: number;
  name: string;
  abilities: IAbility[];
  sprites: {
    front_default: string;
  };
  weight: number;
  next: string;
  prev: string;
}

export interface IRes {
  data: IPoke;
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
}
