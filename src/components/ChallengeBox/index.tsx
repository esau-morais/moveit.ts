import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContexts";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "./challengeBox.module.css";

const ChallengeBox = () => {
  const { currentChallenge, resetChallenge, onChallengeComplete } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  const onChallengeCompleteSuccess = () => {
    onChallengeComplete();
    resetCountdown();
  };
  const onChallengeCompleteFail = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {currentChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {currentChallenge.amount} xp</header>

          <main>
            <span role="img" aria-label={currentChallenge.type}>
              {currentChallenge.icon}
            </span>
            <strong>Novo desafio</strong>
            <p>{currentChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={onChallengeCompleteFail}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeCompletedButton}
              onClick={onChallengeCompleteSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="/icons/levelUp59.svg" alt="Level Up" title="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
