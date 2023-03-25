import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

const PokeItem = () => {
  const { pokeItem } = useContext(PokemonContext);

  return (
    <>
      <div>
        <p>{pokeItem?.name}</p>
        <img src={pokeItem.sprites.front_default} alt="" />
        {pokeItem?.abilities?.map((elem, index) => {
          return (
            <div key={index}>
              <p>{elem?.ability?.name}</p>
              <span>{elem?.slot}</span>
            </div>
          );
        })}
        <p>{pokeItem.weight}</p>
      </div>
    </>
  );
};

export default PokeItem;
