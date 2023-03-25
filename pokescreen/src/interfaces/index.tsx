import { AxiosHeaders } from "axios";
import { ReactNode, SetStateAction } from "react";

export interface IPokemonContext {
  pokeList: IPoke[];
  pokemons: IPoke | undefined;
  pokeItem: IPoke;
  pokeListData: IPoke[] | unknown[];
  getPokemon: (input: string) => Promise<void>;
  pokemonsData: (list: IEndpoint[]) => void;
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
  url: string;
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

export interface IEndpoint {
  name: string;
  url: string;
}

export interface IObj {
  data: {};
  status: number;
  statusText: string;
  headers: AxiosHeaders;
  config: {};
  request: XMLHttpRequest;
}
