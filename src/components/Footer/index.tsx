interface Props {
  onReset: () => void;
}

function Footer({ onReset }: Props) {
  return (
    <footer className="max-w-[610px] mx-auto mb-5">
      <button
        className="bg-yellow-400 text-lg px-4 py-2 mt-6 rounded-md"
        onClick={onReset}
      >
        شروع دوباره
      </button>
    </footer>
  );
}

export default Footer;
