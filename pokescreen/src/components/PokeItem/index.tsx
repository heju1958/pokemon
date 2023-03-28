import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../contexts/pokemonContext";
import {
  ContainerPokeName,
  ContainerPokeItem,
  ContainerAbilities,
} from "./style";
import { ContainerButton } from "../Buttons/style";

const PokeItem = () => {
  const navigate = useNavigate();
  const { pokemons, getPokeDetail, pokeItem } = useContext(PokemonContext);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      getPokeDetail(name);
    }
  }, [pokemons]);

  return (
    <>
      <ContainerPokeName>
        <p>{pokeItem?.name}</p>
      </ContainerPokeName>
      <ContainerPokeItem>
        <img src={pokeItem?.sprites?.front_default} alt="" />
        <ContainerAbilities>
          <p>Abilities</p>
          {pokeItem?.abilities?.map((elem, index) => {
            return (
              <div key={index}>
                <p>{elem?.ability?.name}</p>
                <span>slot {elem?.slot}</span>
              </div>
            );
          })}
          <div>
            <p>weight</p>
            <span> {pokeItem.weight}</span>
          </div>
        </ContainerAbilities>
      </ContainerPokeItem>
      <ContainerButton>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="pokeItemButton"
        >
          Voltar ao inicio
        </button>
      </ContainerButton>
    </>
  );
};

export default PokeItem;
