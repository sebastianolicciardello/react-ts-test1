import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import GiocoCartaForbiceSasso from './GiocoCartaForbiceSasso';

function GiocoComputerVsComputer() {


    return (
        <div>
            <Link to="/carta-forbice-sasso" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center hover:underline">
                <IoMdArrowRoundBack className="mr-2" />
                Indietro
            </Link>
            <h1 className="text-5xl mb-4 mt-4">Simula partita tra Computer</h1>
            <GiocoCartaForbiceSasso  uman={false}/>
        </div>
    );
}

export default GiocoComputerVsComputer