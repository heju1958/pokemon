import { useContext, useState } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

import { ContainerHeader, ContainerSearch } from "./style";
import searchIcon from "../../assets/search.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  const { getPokemon } = useContext(PokemonContext);

  return (
    <ContainerHeader>
      <ContainerSearch>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Pesquise seu pokémon"
        />
        <button onClick={() => getPokemon(search)}>
          <img src={searchIcon} alt="search icon" />
        </button>
      </ContainerSearch>
    </ContainerHeader>
  );
};

export default Header;
