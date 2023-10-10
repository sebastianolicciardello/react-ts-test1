import { ImListNumbered } from "react-icons/im";
import { FaHandScissors } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ButtonWithIcon from "./components/ButtonWithIcon";

function Home() {
  const navigate = useNavigate();
  const ROUTE_FOOBAR = "foobar";
  const ROUTE_CARTA_FORBICE_SASSO = "carta-forbice-sasso";

  const navigateToRoute = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl mb-4">Seleziona</h1>
      <div className="flex flex-col md:flex-row">
        <ButtonWithIcon
          icon={<ImListNumbered className="text-4xl mb-2" />}
          text="FOOBAR"
          onClick={() => navigateToRoute(ROUTE_FOOBAR)}
        />
        <ButtonWithIcon
          icon={<FaHandScissors className="text-4xl mb-2" />}
          text="CARTA - FORBICE - SASSO"
          onClick={() => navigateToRoute(ROUTE_CARTA_FORBICE_SASSO)}
        />
      </div>
    </div>
  );
}

export default Home;
