import PropTypes from "prop-types";
import s from "./FilterBar.module.css";

const FilterBar = ({ makes, selectedMake, onSelectMake }) => {
  return (
    <div className={s.filterBar}>
      <select
        value={selectedMake}
        onChange={(e) => onSelectMake(e.target.value)}
        className={s.dropdown}
      >
        <option value="">All Cars</option>
        {makes.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterBar.propTypes = {
  makes: PropTypes.array.isRequired,
  selectedMake: PropTypes.string,
  onSelectMake: PropTypes.func.isRequired,
};

export default FilterBar;
