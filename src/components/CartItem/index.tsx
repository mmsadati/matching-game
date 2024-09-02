import classNames from "classnames";
import { ImageData } from "@/types";

interface Props {
  index: number;
  imageData: ImageData;
  isGameStarted: boolean;
  isGameOver: boolean;
  isImagesSelected: boolean;
  isGameInPreview: boolean;
  isMatched: boolean;
  onClick: () => void;
}

function CartItem({
  imageData,
  isGameOver,
  isImagesSelected,
  isMatched,
  isGameInPreview,
  onClick,
}: Props) {
  const handleClick = () => {
    if (isMatched || isGameOver || isGameInPreview) return;
    onClick();
  };

  const innerClassNames = classNames(
    "relative w-full h-full text-center transition-all duration-[0.6s] transform-style-3d",
    (isImagesSelected || isMatched || isGameInPreview) &&
      "transform rotate-y-180"
  );

  return (
    <div
      className="w-[140px] h-[140px] m-2 perspective-1000 bg-transparent rounded-md overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className={innerClassNames}>
        <div className="h-full w-full absolute backface-hidden">
          <img
            src="/basalam-back.jpg"
            className="absolute w-full h-full backface-hidden"
            alt="flip-back"
          />
        </div>
        <div className="h-full  w-full absolute backface-hidden transform rotate-y-[180deg]">
          <img
            src={imageData.src}
            className="absolute w-full h-full backface-hidden"
            alt="flip-back"
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
