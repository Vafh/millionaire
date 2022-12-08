import { Link, useLocation } from "react-router-dom";

import { Button } from "../../components/Button";
import styles from "./GameOverPageStyles.module.scss";

export const GameOverPage = () => {
  const location = useLocation();

  return (
    <section className={styles.homePage}>
      <div className={styles.content}>
        <img
          className={styles.logo}
          alt="logo"
          src={require("../../images/logo.png")}
        />
        <div>
          <p className={styles.supTitle}>Total score:</p>
          <h1 className={styles.title}>{location.state} earned</h1>
          <Link to={`/`}>
            <Button text="Try again" />
          </Link>
        </div>
      </div>
    </section>
  );
};
