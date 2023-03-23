import { ReactNode } from "react";
import { PokemonProvider } from "./pokemonContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};
