import axios from "axios";
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  SetStateAction,
} from "react";

interface IPokemonContext {
  arrayFilter: IPoke[];
  pokeItem: IPoke;
  setPokeItem: React.Dispatch<SetStateAction<IPoke>>;
  setSearch: (data: string) => void;
}

interface IPokemonProps {
  children: ReactNode;
}

interface IPoke {
  id: number;
  name: string;
  abilities: IAbility[];
  sprites: {};
  weight: number;
}

interface IRes {
  data: IPoke;
}

interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
}

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

    for (let i = 1; i < 20; i++) {
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

  return (
    <PokemonContext.Provider
      value={{ arrayFilter, pokeItem, setPokeItem, setSearch }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
