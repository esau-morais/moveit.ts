import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContexts";
import styles from "./profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/esau-morais.png" alt="Esaú Morais" />
      <div>
        <strong>Esaú Morais</strong>
        <p>
          <img src="/icons/Level.svg" alt="Level 1" title="Level 1" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
