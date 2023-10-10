import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaHandScissors } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import ButtonWithIcon from "../components/ButtonWithIcon";

function CartaForbiceSasso() {
  const ROUTE_UMAN = "carta-forbice-sasso/uman-vs-pc";
  const ROUTE_PC = "carta-forbice-sasso/pc-vs-pc";
  const navigate = useNavigate();

  const navigateToRoute = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div>
      <Link to="/" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center hover:underline">
        <IoMdArrowRoundBack className="mr-2" />
        Home
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl mb-4 mt-4">Carta - Forbice - Sasso</h1>
        <div className="flex">
          <ButtonWithIcon
            icon={<FaHandScissors className="text-4xl mb-2" />}
            text="CONTRO IL COMPUTER"
            onClick={() => navigateToRoute(ROUTE_UMAN)}
          />
          <ButtonWithIcon
            icon={<FaComputer className="text-4xl mb-2" />}
            text="SIMULA PARTITA TRA COMPUTER"
            onClick={() => navigateToRoute(ROUTE_PC)}
          />
        </div>
      </div>

    </div>
  );
}

export default CartaForbiceSasso;