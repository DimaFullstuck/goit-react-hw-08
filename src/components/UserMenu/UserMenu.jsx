import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())} className={styles.button}>
        Logout
      </button>
    </div>
  );
};
