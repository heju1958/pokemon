import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { useNavigate } from "react-router-dom";

const PokeCard = () => {
  const { arrayFilter, setPokeItem } = useContext(PokemonContext);
  const navigate = useNavigate();

  return (
    <>
      {arrayFilter?.map((poke) => (
        <li
          key={poke.id}
          onClick={() => {
            setPokeItem(poke);
            navigate("/pokepage");
          }}
        >
          <div>
            <p>{poke.name}</p>
            <img src={poke.sprites.front_default} alt="" />
            <p></p>
          </div>
        </li>
      ))}
    </>
  );
};

export default PokeCard;
