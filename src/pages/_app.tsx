import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          (err) => {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }

    console.log(
      "%cWelcome to %cMove.it! 🎉",
      "font-size: 2rem;",
      "font-size: 2rem; color: #5965e0"
    );
  }, []);

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
