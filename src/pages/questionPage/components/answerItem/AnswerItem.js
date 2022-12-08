import React from "react";

import { VARIANTS } from "../../../../constants/constants";

import styles from "./AnswerItemStyles.module.scss";

export const AnswerItem = ({ answer, onClick, index }) => (
  <li className={styles.answerBox} onClick={() => onClick(answer)}>
    <span className={styles.answerVariant}>{VARIANTS[index]}</span>
    <p className={styles.textAnswer}>{answer}</p>
  </li>
);
