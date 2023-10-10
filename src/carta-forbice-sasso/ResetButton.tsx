
interface ResetButtonProps {
  onClick: () => void;
}

function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-3 py-2 px-6 w-fit flex items-center justify-center bg-gray-200 rounded p-2 cursor-pointer transition duration-300 hover:bg-gray-300 mb-3"
    >
      <span className="text-gray-800 text-xl font-semibold md:text-xs">RESET</span>
    </button>
  );
}

export default ResetButton;
