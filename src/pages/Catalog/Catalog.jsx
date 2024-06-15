import { useState, useEffect } from "react";
import CarList from "../../components/CarList/CarList";
import FilterBar from "../../components/FilterBar/FilterBar";
import makes from "../../../makes.json";
import { useDispatch } from "react-redux";
import { fetchCarsThunk } from "../../redux/cars/operation";
import s from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    dispatch(fetchCarsThunk({ page: 1, limit: 10, make: selectedMake }));
  };

  const handleMakeChange = (make) => {
    setSelectedMake(make);
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
