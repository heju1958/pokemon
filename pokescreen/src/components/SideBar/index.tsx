import { ContainerSideBar } from "./style";
import pokeLogo from "../../assets/pokelogo.svg";
import pokeBall from "../../assets/pokeball.svg";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <ContainerSideBar>
      <img
        src={pokeBall}
        alt="poke logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <img src={pokeLogo} alt="poke logo" />
    </ContainerSideBar>
  );
};

export default SideBar;
