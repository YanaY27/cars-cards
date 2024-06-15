import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import s from "./CarModal.module.css";

const CarModal = ({ onClose, item, isOpen }) => {
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
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    address,
    rentalConditions,
    mileage,
    rentalPrice,
  } = item;

  const [city, country] = address.split(",");
  const rentalConditionsArray = rentalConditions.split("\n");

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <button className={s.closeBtn} onClick={onClose}>
          <IoMdClose />
        </button>
        <div className={s.content}>
          <section className={s.firstSection}>
            <div className={s.wrapImg}>
              <img src={img} alt={make} className={s.img} />
            </div>
            <div className={s.mainInfo}>
              <h2>
                {make} <span className={s.blue}>{model}</span>, {year}
              </h2>
              <ul className={s.list}>
                <li>{city}</li>
                <li>{country}</li>
                <li>Id: {id}</li>
                <li>Year: {year}</li>
                <li>Type: {type}</li>
              </ul>
              <ul className={s.list}>
                <li>Fuel Consumption: {fuelConsumption}</li>
                <li>Engine Size: {engineSize}</li>
              </ul>
            </div>
            <p className={s.descr}>{description}</p>
          </section>

          <section className={s.secondSection}>
            <h3>Accessories and functionalities:</h3>
            <ul>
              {accessories.map((accessory, index) => (
                <li key={index}>{accessory}</li>
              ))}
            </ul>
            <ul>
              {functionalities.map((functionality, index) => (
                <li key={index}>{functionality}</li>
              ))}
            </ul>
          </section>

          <section className={s.thirdSection}>
            <h3>Rental Conditions:</h3>
            <ul className={s.conditions}>
              {rentalConditionsArray.map((condition, index) => (
                <li key={index}>
                  {condition.includes("age") ? (
                    <span className={s.blue}>{condition}</span>
                  ) : (
                    condition
                  )}
                </li>
              ))}
              <li>
                Mileage: <span className={s.mileage}>{mileage}</span>
              </li>
              <li>
                Price:
                <span className={s.highlight}>
                  {parseFloat(rentalPrice.replace("$", ""))}$
                </span>
              </li>
            </ul>
          </section>
          <a href="tel:+380730000000" className={s.rentalBtn}>
            Rental car
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default CarModal;
