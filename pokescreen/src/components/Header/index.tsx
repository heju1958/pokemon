import { useContext, useState } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

const Header = () => {
  const [search, setSearch] = useState("");
  const { getPokemon } = useContext(PokemonContext);

  return (
    <div>
      <input
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="Pesquise seu pokémon"
      />
      <button onClick={() => getPokemon(search)}>Pesquisar</button>
    </div>
  );
};

export default Header;
