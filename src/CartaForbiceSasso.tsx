import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaHandScissors } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

function CartaForbiceSasso() {

  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div>
      <Link to="/" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center">
        <IoMdArrowRoundBack className="mr-2" />
        Home
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl mb-4 mt-4">Carta - Forbice - Sasso</h1>
        <div className="flex">
        <button
          onClick={() => handleClick("uman-vs-pc")}
          className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:border-gray-300 mr-4"
        >
          <FaHandScissors className="text-4xl mb-2" />
          <span className="text-gray-800 text-xl font-semibold">CONTRO IL COMPUTER</span>
        </button>
        <button
          onClick={() => handleClick("pc-vs-pc")}
          className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:border-gray-300"
        >
          <FaComputer className="text-4xl mb-2" />
          <span className="text-gray-800 text-xl font-semibold">SIMULA PARTITA TRA COMPUTER</span>
        </button>
        </div>
      </div>

    </div>
  );
}

export default CartaForbiceSasso;