import { basalamProducts } from "@/constants";
import { ImageData } from "@/types";
import { shuffleImages } from "@/utils";

type State = {
  images: ImageData[];
  firstImageIndex: number | null;
  secondImageIndex: number | null;
  matchedIndices: number[];
  timeLeft: number;
  userSteps: number;
  isGameStarted: boolean;
  isImagesPreView: boolean;
  isGameOver: boolean;
};

type Action =
  | { type: "START_GAME" }
  // | { type: "RESTART_GAME" }
  | { type: "CLICK_CARD"; index: number }
  | { type: "MATCH_CARDS" }
  | { type: "RESET_MATCHED_INDICES" }
  | { type: "RESET_CARDS" }
  | { type: "DECREMENT_TIME" }
  | { type: "DECREMENT_STEPS" }
  | { type: "RESTART_GAME" }
  | { type: "GAME_OUT_PREVIEW" }
  | { type: "END_GAME" };

const initialState: State = {
  images: shuffleImages(basalamProducts),
  firstImageIndex: null,
  secondImageIndex: null,
  matchedIndices: [],
  timeLeft: 120,
  userSteps: 40,
  isGameStarted: false,
  isImagesPreView: true,
  isGameOver: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        isGameStarted: true,
        timeLeft: 120,
        userSteps: 40,
        isGameOver: false,
        isImagesPreView: false,
        firstImageIndex: null,
        secondImageIndex: null,
      };
    // case "RESTART_GAME":
    //   return {
    //     ...state,
    //     isGameReStarted: true,
    //   };
    case "RESTART_GAME":
      return {
        ...initialState,
        images: shuffleImages(basalamProducts),
        isImagesPreView: true,
      };
    case "GAME_OUT_PREVIEW":
      return {
        ...state,
        isImagesPreView: false,
      };
    case "CLICK_CARD":
      if (state.firstImageIndex === null) {
        // Start the game on the first click
        if (!state.isGameStarted) {
          return {
            ...state,
            isGameStarted: true,
            timeLeft: 120,
            userSteps: 40,
            firstImageIndex: action.index,
          };
        }
        return { ...state, firstImageIndex: action.index };
      } else if (state.secondImageIndex === null) {
        return { ...state, secondImageIndex: action.index };
      }
      return state;
    case "MATCH_CARDS":
      if (state.firstImageIndex !== null && state.secondImageIndex !== null) {
        const images = state.images;
        const firstImage = images[state.firstImageIndex];
        const secondImage = images[state.secondImageIndex];

        if (firstImage.key === secondImage.key) {
          const matchedIndices = [
            ...state.matchedIndices,
            state.firstImageIndex,
            state.secondImageIndex,
          ];
          return {
            ...state,
            matchedIndices,
            isGameOver: matchedIndices.length === initialState.images.length,
            firstImageIndex: null,
            secondImageIndex: null,
          };
        }
      }
      return state;
    case "RESET_MATCHED_INDICES":
      return { ...state, matchedIndices: [] };
    case "RESET_CARDS":
      return { ...state, firstImageIndex: null, secondImageIndex: null };
    case "DECREMENT_TIME":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "DECREMENT_STEPS":
      return { ...state, userSteps: state.userSteps - 2 };
    case "END_GAME":
      return { ...state, isGameOver: true, isGameStarted: false };
    default:
      return state;
  }
};

export { reducer, initialState };
