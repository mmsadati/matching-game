import { useReducer, useEffect } from "react";
import Swal from "sweetalert2";

import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

import { reducer, initialState } from "./store";

import { showAlert } from "./utils";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showLoseAlert = (type: "time" | "step") => {
    Swal.fire({
      title: "!شما باختید",
      text:
        type === "step"
          ? "تعداد دفعات سعی شما به پایان رسید"
          : "زمان شما به پایان رسید",
      icon: "error",
      confirmButtonText: "تایید",
    });
  };

  useEffect(() => {
    let intervalId: any; // for clear the timeout after the game ended

    if (state.isGameStarted && !state.isGameOver) {
      intervalId = setInterval(() => {
        dispatch({ type: "DECREMENT_TIME" });
      }, 1000);
    }

    if (state.timeLeft <= 0 || state.userSteps <= 0) {
      dispatch({ type: "END_GAME" });
      const alertText =
        state.timeLeft <= 0
          ? "زمان شما به پایان رسید"
          : "تعداد دفعات سعی شما به پایان رسید";
      showAlert("شما بازی را باختید!", alertText, "error");
    }

    return () => clearInterval(intervalId);
  }, [state.isGameStarted, state.isGameOver, state.timeLeft, state.userSteps]);

  useEffect(() => {
    if (state.matchedIndices.length === state.images.length) {
      showAlert("شما برنده شدید!", "بازی با موفقیت به پایان رسید", "success");
    }

    if (state.firstImageIndex !== null && state.secondImageIndex !== null) {
      const { firstImageIndex, secondImageIndex } = state;
      if (firstImageIndex !== secondImageIndex) {
        // when user click on a card only onced
        dispatch({ type: "MATCH_CARDS" });
      }
      setTimeout(() => {
        dispatch({ type: "RESET_CARDS" });
        dispatch({ type: "DECREMENT_STEPS" });
      }, 1000);
    }
  }, [state.firstImageIndex, state.secondImageIndex, state.matchedIndices]);

  useEffect(() => {
    if (state.isImagesPreView) {
      setTimeout(() => {
        dispatch({ type: "GAME_OUT_PREVIEW" });
      }, 3000);
    }
  }, [state.isImagesPreView]);

  const handleGameReset = () => {
    dispatch({ type: "RESTART_GAME" });
  };

  return (
    <div className="w-2/4 mx-auto">
      <Header
        timeLeft={state.timeLeft}
        userSteps={state.userSteps}
        isGameStarted={state.isGameStarted}
      />
      <Game
        images={state.images}
        isGameStarted={state.isGameStarted}
        isGameOver={state.isGameOver}
        isGameInPreview={state.isImagesPreView}
        imagesSelected={[state.firstImageIndex, state.secondImageIndex]}
        matchedIndices={state.matchedIndices}
        dispatch={dispatch}
      />
      {state.isGameOver && <Footer onReset={handleGameReset} />}
    </div>
  );
}

export default App;
