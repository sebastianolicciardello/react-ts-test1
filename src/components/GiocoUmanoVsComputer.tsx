import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import GiocoCartaForbiceSasso from './GiocoCartaForbiceSasso';

function GiocoUmanoVsComputer() {


    return (
        <div>
            <Link to="/carta-forbice-sasso" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center hover:underline">
                <IoMdArrowRoundBack className="mr-2" />
                Indietro
            </Link>
            <div className="flex flex-col items-center h-screen">
            <h1 className="text-5xl mb-4 mt-4">Gioca contro il Computer</h1>
            <GiocoCartaForbiceSasso  uman={true}/>
            </div>
        </div>
    );
}

export default GiocoUmanoVsComputer