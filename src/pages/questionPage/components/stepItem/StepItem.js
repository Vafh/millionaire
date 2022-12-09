import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./StepItemStyles.module.scss";

export const StepItem = ({ point, currentQuestion, index, setValue }) => {
  const isCurrentQuestion = currentQuestion === index + 1;

  useEffect(() => {
    isCurrentQuestion && setValue(point);
  });

  return (
    <li
      className={`${styles.stepBox}${
        isCurrentQuestion ? " " + styles.active : ""
      }${index + 1 < currentQuestion ? " " + styles.previous : ""}`}
    >
      <span className={styles.stepVariant}>{point}</span>
    </li>
  );
};

StepItem.propTypes = {
  point: PropTypes.string,
  setValue: PropTypes.func,
  index: PropTypes.number,
  currentQuestion: PropTypes.number
};
