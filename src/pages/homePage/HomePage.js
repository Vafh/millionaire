import { Link } from "react-router-dom";

import { DEFAULT_QUESTION_NUMBER } from "../../constants/constants";

import { Button } from "../../components/Button";
import styles from "./HomePageStyles.module.scss";

export const HomePage = () => (
  <section className={styles.homePage}>
    <div className={styles.content}>
      <img
        className={styles.logo}
        alt="logo"
        src={require("../../images/logo.png")}
      />
      <div>
        <h1 className={styles.title}>Who wants to be a millionaire?</h1>
        <Link to={`/question/${DEFAULT_QUESTION_NUMBER}`}>
          <Button text="start" />
        </Link>
      </div>
    </div>
  </section>
);
