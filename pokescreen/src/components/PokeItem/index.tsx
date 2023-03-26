import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

const PokeItem = () => {
  const { pokeItem } = useContext(PokemonContext);

  // useEffect(() => {}, [pokeItem]);

  return (
    <>
      <div>
        <p>{pokeItem?.name}</p>
        <img src={pokeItem.sprites.front_default} alt="" />
        <p>Abilities</p>
        {pokeItem?.abilities?.map((elem, index) => {
          return (
            <div key={index}>
              <p>{elem?.ability?.name}</p>
              <span>slot {elem?.slot}</span>
            </div>
          );
        })}
        <p>weight {pokeItem.weight}</p>
      </div>
    </>
  );
};

export default PokeItem;
