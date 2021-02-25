import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "./countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    onCountdownStart,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          🏆Finalmente hein
        </button>
      ) : (
        <button
          type="button"
          className={`${styles.countdownButton} ${
            isActive ? styles.resetCountdown : styles.startCountdown
          }`}
          onClick={isActive ? resetCountdown : onCountdownStart}
        >
          {isActive ? "😥Num aguento mais" : "🏋️‍♀️Puxa bb"}
        </button>
      )}
    </>
  );
};

export default Countdown;
