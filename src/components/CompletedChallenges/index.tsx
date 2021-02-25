import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContexts";
import styles from "./completedChallenges.module.css";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
