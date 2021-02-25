import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../components/ChallengeBox/challenges.json";

interface Challenge {
  type: string;
  description: string;
  amount: number;
  icon: string;
}

interface ChallengesContextData {
  level: number;
  currentProgress: number;
  progressToNextLevel: number;
  currentChallenge: Challenge;
  challengesCompleted: number;
  handleLevelUp: () => void;
  onNewChallengeStart: () => void;
  onChallengeComplete: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const progressToNextLevel = Math.pow(level + 1 * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const handleLevelUp = () => {
    setLevel(level + 1);
  };

  const onNewChallengeStart = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex]; // Current challenge
    setCurrentChallenge(challenge);

    // Notify the user
    new Audio('/audio/notification.mp3').play();
    if (Notification.permission === "granted") {
      new Notification("🛡Novo desafio!", {
        body: `Valendo ${challenge.amount} xp!`,
        badge: `${challenge.icon}`,
        icon: `${challenge.icon}`,
        image: `${challenge.icon}`,
      });
    }
  };

  const onChallengeComplete = () => {
    if (!currentChallenge) {
      return;
    }

    const { amount } = currentChallenge;

    let finalProgress = currentProgress + amount;
    if (finalProgress >= progressToNextLevel) {
      finalProgress -= progressToNextLevel;
    }
    handleLevelUp();

    setCurrentProgress(finalProgress);
    setCurrentChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  const resetChallenge = () => {
    setCurrentChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        progressToNextLevel,
        currentProgress,
        challengesCompleted,
        handleLevelUp,
        onNewChallengeStart,
        onChallengeComplete,
        currentChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
