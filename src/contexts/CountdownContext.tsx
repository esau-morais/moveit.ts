import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContexts";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  onCountdownStart: () => void;
  resetCountdown: () => void;
}
export const CountdownContext = createContext({} as CountdownContextData);

interface CountdownProviderProps {
  children: ReactNode;
}
let countdownTimeout: NodeJS.Timeout;
export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { onNewChallengeStart } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const onCountdownStart = () => {
    setIsActive(true);
  };
  const resetCountdown = () => {
    clearTimeout(countdownTimeout); // Stop
    setIsActive(false); // Stop
    setHasFinished(false);
    setTime(0.1 * 60); // Reset
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1); // Decrease time every second
      }, 1000);
      document.title = `${minuteLeft}${minuteRight}:${secondLeft}${secondRight} | Move.it`;
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false); // Stop
      document.title = "Início | Move.it";
      onNewChallengeStart();
    }
  }, [isActive, time, minuteLeft, minuteRight, secondLeft, secondRight]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        onCountdownStart,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
