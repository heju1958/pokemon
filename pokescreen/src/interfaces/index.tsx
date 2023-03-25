import { ReactNode, SetStateAction } from "react";

export interface IPokemonContext {
  pokeList: IPoke[];
  pokemons: IPoke | undefined;
  pokeItem: IPoke;
  pokeListData: IPoke[] | unknown[];
  getPokemon: (input: string) => Promise<void>;
  pokemonsData: (list: any) => void;
  currentFunction: () => void;
  nextPage: () => void;
  previusPage: () => void;
  setPokeItem: React.Dispatch<SetStateAction<IPoke>>;
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
  previous: string;
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
