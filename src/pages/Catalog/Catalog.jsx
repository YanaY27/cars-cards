import { useState, useEffect } from "react";
import CarList from "../../components/CarList/CarList";
import FilterBar from "../../components/FilterBar/FilterBar";
import makes from "../../../makes.json"; // Імпортуйте список марок
import { useDispatch } from "react-redux";
import { fetchCarsThunk } from "../../redux/cars/operation"; // Імпортуємо тільки необхідну функцію
import s from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState(""); // Локальний стан для зберігання вибраної марки

  useEffect(() => {
    fetchCars(); // Викликаємо fetchCars при монтажі компонента
  }, []);

  const fetchCars = () => {
    // Функція для виклику fetchCarsThunk з потрібними параметрами
    dispatch(fetchCarsThunk({ page: 1, limit: 10, make: selectedMake }));
  };

  const handleMakeChange = (make) => {
    setSelectedMake(make); // Оновлюємо вибрану марку в стані компонента
  };

  return (
    <div className={s.container}>
      <FilterBar
        makes={makes}
        selectedMake={selectedMake}
        onSelectMake={handleMakeChange}
      />
      <CarList />
    </div>
  );
};

export default Catalog;
