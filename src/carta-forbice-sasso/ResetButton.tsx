
interface ResetButtonProps {
  onClick: () => void;
}

function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-fit flex items-center justify-center bg-gray-200 rounded-full p-2 cursor-pointer transition duration-300 hover:bg-gray-300 mt-1 mb-3"
    >
      <span className="text-gray-800 text-xs font-semibold">RESET</span>
    </button>
  );
}

export default ResetButton;
