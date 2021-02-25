import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContexts";
import styles from "./progressBar.module.css";

const ProgressBar = () => {
  const { currentProgress, progressToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentProgress * 100) / progressToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.experienceBarCurrent}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentProgress} xp
        </span>
      </div>
      <span>{progressToNextLevel} xp</span>
    </header>
  );
};

export default ProgressBar;
