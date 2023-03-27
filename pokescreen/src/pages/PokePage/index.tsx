import PokeItem from "../../components/PokeItem";
import SideBar from "../../components/SideBar";
import { ContainerDashboard, BoxDashboard } from "../Dashboard/style";

const PokePage = () => {
  return (
    <ContainerDashboard>
      <SideBar />
      <BoxDashboard>
        <PokeItem />
      </BoxDashboard>
    </ContainerDashboard>
  );
};

export default PokePage;
