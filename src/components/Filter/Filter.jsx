import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
