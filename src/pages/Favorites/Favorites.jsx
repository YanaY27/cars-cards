import { useSelector } from "react-redux";
import s from "./Favorites.module.css";
import CarItem from "../../components/CarItem/CarItem";
import { selectFavorites } from "../../redux/favorite/selectors";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  // Тут потрібно також отримати всі автомобілі зі стану, щоб мати можливість відображати деталі обраних авто
  const allCars = useSelector((state) => state.cars.cars);

  const favoriteCars = allCars.filter((car) => favorites.includes(car.id));

  return (
    <div>
      <h2>Favorites</h2>
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
