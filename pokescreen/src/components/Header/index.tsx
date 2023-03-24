import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

const Header = () => {
  const { setSearch } = useContext(PokemonContext);

  return (
    <div>
      <input
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="Pesquise seu pokémon"
      />
    </div>
  );
};

export default Header;
