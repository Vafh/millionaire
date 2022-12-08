import React from "react";
import PropTypes from "prop-types";

import styles from './Button.module.scss'

export const Button = ({ handler, text }) => {
  return (
      <button
        onClick={handler}
        type="button"
        className={styles.button}
      >
        <span>{text}</span>
      </button>
  );
};

Button.propTypes = {
  handler: PropTypes.func,
  text: PropTypes.string,
};
