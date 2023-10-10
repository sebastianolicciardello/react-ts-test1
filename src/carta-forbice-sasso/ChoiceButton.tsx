
import React from "react";
import { FaHandPaper, FaHandScissors, FaHandRock, FaHandLizard, FaHandSpock } from "react-icons/fa";

interface ChoiceButtonProps {
  label: string;
  onClick: () => void;
}

function ChoiceButton({ label, onClick }: ChoiceButtonProps) {
  let icon: React.ReactNode;

  switch (label) {
    case "Carta":
      icon = <FaHandPaper className="text-4xl mb-2" />;
      break;
    case "Forbice":
      icon = <FaHandScissors className="text-4xl mb-2" />;
      break;
    case "Sasso":
      icon = <FaHandRock className="text-4xl mb-2" />;
      break;
    case "Lizard":
      icon = <FaHandLizard className="text-4xl mb-2" />;
      break;
    case "Spock":
      icon = <FaHandSpock className="text-4xl mb-2" />;
      break;
    case "SIMULA":
      icon = <FaHandScissors className="text-4xl mb-2" />;
      break;
    default:
      icon = null;
  }

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:bg-gray-300 w-fit md:w-auto m-1 md:m-4"
    >
      {icon}
      <span className="text-gray-800 text-xl font-semibold">{label}</span>
    </button>
  );
}

export default ChoiceButton;
