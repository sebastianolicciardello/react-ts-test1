import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function GiocoUmanoVsComputer() {


    return (
        <div>
            <Link to="/carta-forbice-sasso" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center">
                <IoMdArrowRoundBack className="mr-2" />
                Indietro
            </Link>
            <h2>Gioca contro il Computer</h2>
            {/* Aggiungi i pulsanti e la logica per la giocata umano vs computer */}
        </div>
    );
}

export default GiocoUmanoVsComputer