import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrFavorite } from "react-icons/gr";
import { IoMdHeart } from "react-icons/io";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorite/slice";
import { selectFavorites } from "../../redux/favorite/selectors";
import CarModal from "../CarModal/CarModal";
import s from "./CarItem.module.css";

const CarItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(item.id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(item.id));
  }, [favorites, item.id]);

  const onToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item.id));
    }
    setIsFavorite(!isFavorite);
  };

  if (!item) {
    return null;
  }

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = item;
  const [, city, country] = address.split(",");
  const functionality = functionalities[0].split(" ").slice(0, 2).join(" ");

  return (
    <>
      <li className={s.item}>
        <button className={s.btn} onClick={onToggleFavorite}>
          {isFavorite ? (
            <IoMdHeart size={20} className={s.likedIcon} />
          ) : (
            <GrFavorite size={20} className={s.icon} />
          )}
        </button>
        <div className={s.wrapImg}>
          <img src={img} alt={make} className={s.img} />
        </div>
        <div className={s.container}>
          <div className={s.title}>
            <p>
              {make} <span className={s.blue}>{model}</span>, {year}
            </p>
            <p>{rentalPrice}</p>
          </div>
          <div className={s.descr}>
            <ul className={s.headInfo}>
              <li>{city.trim()}</li>
              <li>{country.trim()}</li>
              <li>{rentalCompany}</li>
            </ul>
            <ul className={s.bottomInfo}>
              <li>{type}</li>
              <li>{model}</li>
              <li>{id}</li>
              <li>{functionality}</li>
            </ul>
          </div>
          <button onClick={handleLearnMore} className={s.learnMoreBtn}>
            Learn more
          </button>
        </div>
      </li>
      {isModalOpen && (
        <CarModal onClose={handleCloseModal} item={item} isOpen={isModalOpen} />
      )}
    </>
  );
};

export default CarItem;
