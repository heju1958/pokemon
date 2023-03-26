import PokeCard from "../../components/PokeCard";
import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import SideBar from "../../components/SideBar";

import { ContainerDashboard, BoxDashboard } from "./style";

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <SideBar />
      <BoxDashboard>
        <Header />
        <PokeCard />
        <Buttons />
      </BoxDashboard>
    </ContainerDashboard>
  );
};

export default Dashboard;
