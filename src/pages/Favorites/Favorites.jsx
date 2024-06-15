import { useSelector } from "react-redux";
import s from "./Favorites.module.css";
import CarItem from "../../components/CarItem/CarItem";
import { selectFavorites } from "../../redux/favorite/selectors";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  const allCars = useSelector((state) => state.cars.cars);

  const favoriteCars = allCars.filter((car) => favorites.includes(car.id));

  return (
    <div className={s.container}>
      <h2></h2>
      <ul className={s.list}>
        {favoriteCars.map((car) => (
          <li className={s.item} key={car.id}>
            <CarItem item={car} />
          </li>
        ))}
      </ul>
      {favoriteCars.length === 0 && <p>No favorite cars yet.</p>}
    </div>
  );
};

export default Favorites;
