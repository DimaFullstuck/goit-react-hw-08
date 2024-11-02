import React from "react";
import { useSelector } from "react-redux";
import styles from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </nav>
    </header>
  );
};

export default AppBar;
