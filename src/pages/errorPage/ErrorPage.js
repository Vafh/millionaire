import { useRouteError } from "react-router-dom";

import styles from "./ErrorPageStyles.module.scss"

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
