import { useDispatch, useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";
import s from "./CarList.module.css";
import {
  selectCars,
  selectLimit,
  selectPage,
  selectTotal,
} from "../../redux/cars/selectors";
import { fetchCarsThunk } from "../../redux/cars/operation";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect } from "react";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  const handleLoadMore = () => {
    dispatch(fetchCarsThunk({ page: page + 1, limit }));
  };

  if (!cars.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className={s.list}>
        {cars.map((car) => (
          <CarItem item={car} key={car.id} />
        ))}
      </ul>
      {cars.length > 0 && cars.length < total && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default CarList;
