import axios from "axios";
import { createContext, useState, useEffect } from "react";

import { IPoke, IPokemonContext, IPokemonProps, IRes } from "../interfaces";

export const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);

export const PokemonProvider = ({ children }: IPokemonProps) => {
  const [pokemons, setPokemons] = useState<IPoke[]>([] as IPoke[]);
  const [pokeItem, setPokeItem] = useState<IPoke>({} as IPoke);
  const [search, setSearch] = useState("");

  const arrayFilter = pokemons.filter((pokemons) =>
    pokemons.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const endpoints = [];

    for (let i = 1; i < 10; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint: string) => axios.get(endpoint)))
      .then((res: IRes[]) => {
        const response = res.map((elem) => {
          return elem.data;
        });
        setPokemons(response);
      });
  };

  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  // useEffect(() => {
  //   fetch(currentPage)
  //     .then((res) => res.json())
  //     .then((res) => setPokemons(res))
  //     .catch((err) => console.log(err));
  // }, [currentPage]);

  // const nextPage = () => {
  //   setCurrentPage(pokemons.next);
  // };

  // const previusPage = () => {
  //   setCurrentPage(pokemons.previous);
  // };

  return (
    <PokemonContext.Provider
      value={{ arrayFilter, pokeItem, setPokeItem, setSearch }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// paginação
