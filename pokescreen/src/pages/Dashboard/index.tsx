import PokeCard from "../../components/PokeCard";
import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import SideBar from "../../components/SideBar";

const Dashboard = () => {
  return (
    <>
      <SideBar />
      <Header />
      <PokeCard />
      <Buttons />
    </>
  );
};

export default Dashboard;
