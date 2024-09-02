import { Dispatch } from "react";

import CartItem from "../CartItem";

import { ImageData } from "@/types";

interface Props {
  images: ImageData[];
  isGameOver: boolean;
  isGameStarted: boolean;
  isGameInPreview: boolean;
  imagesSelected: [null | number, null | number];
  matchedIndices: number[];
  dispatch: Dispatch<any>;
}

function Game({
  images,
  isGameStarted,
  isGameOver,
  isGameInPreview,
  imagesSelected,
  matchedIndices,
  dispatch,
}: Props) {
  const handleClick = (index: number) => {
    dispatch({ type: "CLICK_CARD", index });
  };

  return (
    <div className="flex max-w-[625px] mx-auto flex-wrap mt-5 justify-center">
      {images.map((image, index) => (
        <CartItem
          key={index}
          index={index}
          imageData={image}
          isGameOver={isGameOver}
          isGameStarted={isGameStarted}
          isGameInPreview={isGameInPreview}
          isImagesSelected={imagesSelected.includes(index)}
          isMatched={matchedIndices.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Game;
