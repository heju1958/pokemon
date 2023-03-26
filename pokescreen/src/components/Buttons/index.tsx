import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

import { ContainerButton } from "./style";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";

const Buttons = () => {
  const { nextPage, previousPage } = useContext(PokemonContext);

  return (
    <ContainerButton>
      <button onClick={previousPage}>
        <img src={previous} alt="previous icon" />
      </button>
      <button onClick={nextPage}>
        <img src={next} alt="next icon" />
      </button>
    </ContainerButton>
  );
};

export default Buttons;
