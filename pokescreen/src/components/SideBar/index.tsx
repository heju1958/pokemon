import { ContainerSideBar } from "./style";
import pokeLogo from "../../assets/pokelogo.svg";
import pokeBall from "../../assets/pokeball.svg";

const SideBar = () => {
  return (
    <ContainerSideBar>
      <img src={pokeBall} alt="poke logo" />
      <img src={pokeLogo} alt="poke logo" />
    </ContainerSideBar>
  );
};

export default SideBar;
