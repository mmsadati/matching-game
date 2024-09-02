interface Props {
  timeLeft: number;
  userSteps: number;
  isGameStarted: boolean;
}

function Header({ timeLeft, userSteps }: Props) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <header className="flex max-w-[615px] mx-auto mt-6 justify-between">
      <p className="text-xl">
        زمان: <span className="font-semibold">{formatTime(timeLeft)}</span>
      </p>
      <p className="text-xl">
        تعداد دفعات: <span className="font-semibold">{userSteps}</span>
      </p>
    </header>
  );
}

export default Header;
