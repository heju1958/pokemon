import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

const Buttons = () => {
  const { nextPage, previusPage } = useContext(PokemonContext);

  return (
    <div>
      <button onClick={nextPage}>avançar</button>
      <button onClick={previusPage}>voltar</button>
    </div>
  );
};

export default Buttons;
