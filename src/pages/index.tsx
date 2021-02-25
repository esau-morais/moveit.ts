import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Profile from "../components/Profile";
import ProgressBar from "../components/ProgressBar";
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <div className={styles.appContainer}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ProgressBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};

export default Home;
