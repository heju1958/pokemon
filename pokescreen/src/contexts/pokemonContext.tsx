import axios from "axios";
import api from "../api";

import { createContext, useState, useEffect } from "react";

import { IPoke, IPokemonContext, IPokemonProps, IRes } from "../interfaces";
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
  const [test, setTest] = useState<any>();

  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"
  );

  useEffect(() => {
    currentFunction();
  }, []);

  const currentFunction = async () => {
    await axios
      .get(currentPage)
      .then((res) => {
        setTest(res);
        setPokeList(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    changePages(test.data.next);
  };

  const previusPage = () => {
    changePages(test.data.previous);
  };

  const changePages = async (url: string) => {
    await axios.get(url).then((res) => {
      setTest(res);
      setPokeList(res.data.results);
    });
  };

  const pokemonsData = (list: any) => {
    let url = "https://pokeapi.co/api/v2/pokemon";

    const endpoints = list.map((elem: any) => {
      return axios.get(`${url}/${elem.name}`);
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

  // const pokemonList = async () => {
  //   await api.get("").then((res) => {
  //     setPokeList(res.data.results);
  //   });
  // };

  return (
    <PokemonContext.Provider
      value={{
        getPokemon,
        pokemons,
        pokeList,
        pokeItem,
        setPokeItem,
        currentFunction,
        nextPage,
        previusPage,
        pokemonsData,
        pokeListData,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// tipar 4 any
// quebra na pokepage
// estilizar
