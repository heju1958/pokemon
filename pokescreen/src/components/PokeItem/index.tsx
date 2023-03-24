import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

const PokeItem = () => {
  const { pokeItem } = useContext(PokemonContext);

  return (
    <>
      <div>
        <p>{pokeItem?.name}</p>
        {pokeItem?.abilities?.map((elem, index) => {
          return <p key={index}>{elem?.ability?.name}</p>;
        })}
        <p>{pokeItem.weight}</p>
      </div>
    </>
  );
};

export default PokeItem;
