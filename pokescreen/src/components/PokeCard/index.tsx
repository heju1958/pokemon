import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { useNavigate } from "react-router-dom";
import { ContainerCard } from "./style";

const PokeCard = () => {
  const { pokeList, setPokeItem, getPokemonsData, pokeListData, pokemons } =
    useContext(PokemonContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonsData(pokeList);
  }, [pokeList]);

  if (pokeList.length === 0) {
    return <h1>carregando</h1>;
  }

  return (
    <ContainerCard>
      {pokemons ? (
        <li
          key={pokemons.id}
          onClick={() => {
            setPokeItem(pokemons);
            navigate(`/pokepage/${pokemons.name}`);
          }}
        >
          <div>
            <img src={pokemons.sprites.front_default} alt="poke image" />
            <p>{pokemons.name}</p>
          </div>
        </li>
      ) : (
        pokeListData?.map((poke: any) => {
          return (
            <li
              key={poke.data.id}
              onClick={() => {
                setPokeItem(poke.data);
                navigate(`/pokepage/${poke.data.name}`);
              }}
            >
              <div>
                <img src={poke.data.sprites.front_default} alt="" />
                <p>{poke.data.name}</p>
              </div>
            </li>
          );
        })
      )}
    </ContainerCard>
  );
};

export default PokeCard;
