import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";

const Buttons = () => {
  const { nextPage, previousPage } = useContext(PokemonContext);

  return (
    <div>
      <button onClick={nextPage}>
        <img src={next} alt="next icon" />
      </button>
      <button onClick={previousPage}>
        <img src={previous} alt="previous icon" />
      </button>
    </div>
  );
};

export default Buttons;
