/* eslint-disable react/jsx-pascal-case */
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";

import { POINTS, WIN_POINT } from "../../constants/constants";
import config from "../../config/config.json";

import { AnswerItem } from "./components/answerItem";
import { StepItem } from "./components/stepItem";
import styles from "./QuestionPageStyles.module.scss";
import ICONS from "../../images";

export const QuestionPage = () => {
  const [scaleOfPoints, setScaleOfPoints] = useState(false);
  const [currentValue, setValue] = useState(0);

  const { questionNumber } = useParams();
  const navigate = useNavigate();
  const prevValue = useRef(currentValue);

  const { correctAnswers, testQuestions } = config;
  const currentQuestion = testQuestions[questionNumber];

  const handleClickAnswer = (answer) => {
    if (answer === correctAnswers[questionNumber - 1]) {
      if (+questionNumber + 1 === WIN_POINT) {
        return navigate(`/end`, { state: currentValue });
      }
      prevValue.current = currentValue;
      navigate(`/question/${+questionNumber + 1}`);
    } else {
      navigate(`/end`, { state: prevValue.current });
    }
  };

  return (
    <section className={styles.questionPage}>
      {scaleOfPoints ? (
        <ICONS.close
          className={styles.menuIcon}
          onClick={() => setScaleOfPoints(!scaleOfPoints)}
        />
      ) : (
        <ICONS.menu
          className={styles.menuIcon}
          onClick={() => setScaleOfPoints(!scaleOfPoints)}
        />
      )}
      <div className={styles.content}>
        <p className={styles.textQuestion}>{currentQuestion[0].question}</p>
        <ul className={styles.answersList}>
          {currentQuestion[1].answers.map(({ answer }, index) => (
            <AnswerItem
              key={answer}
              index={index}
              answer={answer}
              onClick={handleClickAnswer}
            />
          ))}
        </ul>
      </div>

      <ul className={`${styles.scaleOfPoints} ${scaleOfPoints && styles.open}`}>
        {POINTS.map((point, index) => (
          <StepItem
            key={point}
            point={point}
            index={index}
            currentQuestion={+questionNumber}
            setValue={setValue}
            currentValue={currentValue}
          />
        )).reverse()}
      </ul>
    </section>
  );
};
