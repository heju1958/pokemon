import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { useNavigate } from "react-router-dom";

const PokeCard = () => {
  const { pokeList, setPokeItem, pokemonsData, pokeListData, pokemons } =
    useContext(PokemonContext);
  const navigate = useNavigate();

  useEffect(() => {
    pokemonsData(pokeList);
  }, [pokeList]);

  if (pokeList.length === 0) {
    return <h1>carregando</h1>;
  }

  return (
    <>
      {pokemons ? (
        <li
          key={pokemons.id}
          onClick={() => {
            setPokeItem(pokemons);
            navigate("/pokepage");
          }}
        >
          <div>
            <p>{pokemons.name}</p>
            <img src={pokemons.sprites.front_default} alt="" />
          </div>
        </li>
      ) : (
        pokeListData?.map((poke: any) => {
          // console.log(poke);
          return (
            <li
              key={poke.data.id}
              onClick={() => {
                setPokeItem(poke.data);
                navigate("/pokepage");
              }}
            >
              <div>
                <p>{poke.data.name}</p>
                <img src={poke.data.sprites.front_default} alt="" />
              </div>
            </li>
          );
        })
      )}
    </>
  );
};

export default PokeCard;
