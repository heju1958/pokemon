import PokeItem from "../../components/PokeItem";
import SideBar from "../../components/SideBar";
import { ContainerDashboard, BoxDashboard } from "../Dashboard/style";
import { motion } from "framer-motion";

const PokePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ContainerDashboard>
        <SideBar />
        <BoxDashboard>
          <PokeItem />
        </BoxDashboard>
      </ContainerDashboard>
    </motion.div>
  );
};

export default PokePage;
