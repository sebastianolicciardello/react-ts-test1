import { ReactNode } from 'react';

type ButtonWithIconProps = {
  icon: ReactNode;
  text: string;
  onClick: () => void;
};

function ButtonWithIcon({ icon, text, onClick }: ButtonWithIconProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:bg-gray-300
      w-full md:w-auto m-2 md:m-4`}
    >
      {icon}
      <span className="text-gray-800 text-xl font-semibold">{text}</span>
    </button>
  );
}

export default ButtonWithIcon;
