import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Interface para tipar o contexto:

interface IPokemonContext {}

// Interface para tipar as props:

interface IPokemonProps {
  children: ReactNode;
}

export const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);

export const PokemonProvider = ({ children }: IPokemonProps) => {
  const navigate = useNavigate();

  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  );
};
