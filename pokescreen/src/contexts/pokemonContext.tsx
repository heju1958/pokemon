import axios from "axios";
import api from "../api";

import { createContext, useState, useEffect } from "react";

import {
  IPoke,
  IPokemonContext,
  IPokemonProps,
  IEndpoint,
} from "../interfaces";
export const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);

export const PokemonProvider = ({ children }: IPokemonProps) => {
  const [pokemons, setPokemons] = useState<IPoke | undefined>();
  const [pokeItem, setPokeItem] = useState<IPoke>({} as IPoke);
  const [pokeList, setPokeList] = useState<IPoke[]>([] as IPoke[]);
  const [pokeListData, setPokeListData] = useState<IPoke[] | unknown[]>(
    [] as IPoke[]
  );
  const [obj, setObj] = useState<any>();
  // console.log(obj);

  //pagination

  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6"
  );

  useEffect(() => {
    currentPageFunction();
  }, []);

  const currentPageFunction = async () => {
    await axios
      .get(currentPage)
      .then((res) => {
        setObj(res);
        setPokeList(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    changePages(obj.data.next);
  };

  const previousPage = () => {
    changePages(obj.data.previous);
  };

  const changePages = async (url: string) => {
    await axios.get(url).then((res) => {
      setObj(res);
      setPokeList(res.data.results);
    });
  };

  //find pokemons

  const pokemonsData = (list: IEndpoint[]) => {
    const endpoints = list.map((elem) => {
      return api.get(`/${elem.name}`);
    });
    axios.all(endpoints).then(
      axios.spread((...res) => {
        setPokeListData(res);
      })
    );
  };

  const getPokemon = async (input: string) => {
    await api.get(`/${input.toLowerCase()}`).then((res) => {
      setPokemons(res.data);
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        getPokemon,
        pokemons,
        pokeList,
        pokeItem,
        setPokeItem,
        currentPageFunction,
        nextPage,
        previousPage,
        pokemonsData,
        pokeListData,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// tipar 2 any
// quebra na pokepage
// estilizar pokepage
// refinar estilização
