import { ChangeEvent } from "react";

interface GameModeProps {
  lizardSpockMode: boolean;
  setLizardSpockMode: (value: boolean) => void;
}

function GameMode({ lizardSpockMode, setLizardSpockMode }: GameModeProps) {
  const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLizardSpockMode(e.target.checked);
  };

  return (
    <div className="flex justify-center mb-5 mt-3">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={lizardSpockMode}
          onChange={handleModeChange}
          className="mr-2"
        />
        <span className="text-gray-800 text-lg">Play with Lizard-Spock</span>
      </label>
    </div>
  );
}

export default GameMode;
