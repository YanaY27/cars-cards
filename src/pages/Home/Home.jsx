import s from "./Home.module.css";
import { FaCar } from "react-icons/fa";

const Home = () => {
  return (
    <div className={s.container}>
      <h1>We kindly invite you to our car rental company!</h1>
      <p>We rent the best cars for your comfortable transfer.</p>
      <FaCar size={45} className={s.icon} />
    </div>
  );
};

export default Home;
