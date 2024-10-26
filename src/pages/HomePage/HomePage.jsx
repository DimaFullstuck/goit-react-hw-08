// src/pages/HomePage.js
import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.homepage_wrapp}>
      <h2 className={s.title}>Welcome to app!</h2>
      <p className={s.p}>
        This application allows you to store and use your contacts as you see
        fit.
      </p>
      <p className={s.p}>Developer: Dmytro Ostapenko</p>
    </div>
  );
};

export default HomePage;
