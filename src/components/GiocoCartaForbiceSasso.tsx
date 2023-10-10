import { useState } from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import SceltaGiocatore from './SceltaGiocatore';

interface GiocoCartaForbiceSassoProps {
    uman: boolean;
}

function GiocoCartaForbiceSasso(props: GiocoCartaForbiceSassoProps) {
    const [risultato, setRisultato] = useState("");
    const [sceltaGiocatore1, setSceltaGiocatore1] = useState("");
    const [sceltaGiocatore2, setSceltaGiocatore2] = useState("");
    const [giocatoreVincente, setGiocatoreVincente] = useState(0);
    const [vittorieGiocatore1, setVittorieGiocatore1] = useState(0);
    const [vittorieGiocatore2, setVittorieGiocatore2] = useState(0);

    const giocata = (sceltaGiocatore1: string) => {
        const sceltaCasuale2 = Math.floor(Math.random() * 3);
        const scelte = ["Carta", "Forbice", "Sasso"];
        const sceltaGiocatore2 = scelte[sceltaCasuale2];

        setSceltaGiocatore1(sceltaGiocatore1);
        setSceltaGiocatore2(sceltaGiocatore2);


        if (sceltaGiocatore1 === sceltaGiocatore2) {
            setRisultato("Pareggio!");
            setGiocatoreVincente(0);
        } else if (
            (sceltaGiocatore1 === "Carta" && sceltaGiocatore2 === "Sasso") ||
            (sceltaGiocatore1 === "Forbice" && sceltaGiocatore2 === "Carta") ||
            (sceltaGiocatore1 === "Sasso" && sceltaGiocatore2 === "Forbice")
        ) {
            setRisultato("Giocatore 1 ha vinto!");
            setGiocatoreVincente(1);
            setVittorieGiocatore1((prevVittorie) => prevVittorie + 1);
        } else {
            setRisultato("Giocatore 2 ha vinto!");
            setGiocatoreVincente(2);
            setVittorieGiocatore2((prevVittorie) => prevVittorie + 1);
        }
    };

    const simulaPartita = () => {
        const sceltaCasuale1 = Math.floor(Math.random() * 3);
        const scelte = ["Carta", "Forbice", "Sasso"];
        const sceltaGiocatore1 = scelte[sceltaCasuale1];
        giocata(sceltaGiocatore1);
    };

    const resetVittorie = () => {
        setVittorieGiocatore1(0);
        setVittorieGiocatore2(0);
    };

    return (
        <div>
            {props.uman ? (
                <div className="flex mb-5 mt-3">
                    <button
                        onClick={() => giocata("Carta")}
                        className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:bg-gray-300 mr-4"
                    >
                        <FaHandPaper className="text-4xl mb-2" />
                        <span className="text-gray-800 text-xl font-semibold">CARTA</span>
                    </button>
                    <button
                        onClick={() => giocata("Forbice")}
                        className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:bg-gray-300 mr-4"
                    >
                        <FaHandScissors className="text-4xl mb-2" />
                        <span className="text-gray-800 text-xl font-semibold">FORBICE</span>
                    </button>
                    <button
                        onClick={() => giocata("Sasso")}
                        className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:bg-gray-300 mr-4"
                    >
                        <FaHandRock className="text-4xl mb-2" />
                        <span className="text-gray-800 text-xl font-semibold">SASSO</span>
                    </button>
                </div>
            ) : (
                <div className="flex justify-center mb-5 mt-3">
                    <button
                        onClick={() => simulaPartita()}
                        className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:bg-gray-300 mr-4"
                    >
                        <FaHandRock className="text-4xl mb-2" />
                        <span className="text-gray-800 text-xl font-semibold">SIMULA</span>
                    </button>
                </div>
            )}
            <div className="flex flex-col items-center h-screen">

                <div className="flex mt-2">
                    <p className="text-lg mr-4">
                        Giocatore 1:{" "}
                        <span
                            className={`font-semibold ${vittorieGiocatore1 > vittorieGiocatore2 ? "text-green-500" : ""
                                }`}
                        >
                            <span>{vittorieGiocatore1}</span>
                        </span>
                    </p>
                    <p className="text-lg">
                        Giocatore 2:{" "}
                        <span
                            className={`font-semibold ${vittorieGiocatore2 > vittorieGiocatore1 ? "text-green-500" : ""
                                }`}
                        >
                            <span>{vittorieGiocatore2}</span>
                        </span>
                    </p>
                </div>
                {vittorieGiocatore1 > 0 || vittorieGiocatore2 > 0 ? (
                    <div className="flex flex-col justify-center items-center">
                        <button
                            onClick={resetVittorie}
                            className=" w-fit flex items-center justify-center bg-gray-200 rounded-full p-2 cursor-pointer transition duration-300 hover:bg-gray-300 mt-1 mb-3"
                        >
                            <span className="text-gray-800 text-xs font-semibold">RESET</span>
                        </button>
                        <h2 className='text-3xl'>{risultato}</h2>
                        {sceltaGiocatore1 && sceltaGiocatore2 && (
                            <div className="flex">
                                <div className="flex">
                                    <SceltaGiocatore
                                        numeroGiocatore={1}
                                        sceltaGiocatore={sceltaGiocatore1}
                                        giocatoreVincente={giocatoreVincente}
                                    />
                                    <SceltaGiocatore
                                        numeroGiocatore={2}
                                        sceltaGiocatore={sceltaGiocatore2}
                                        giocatoreVincente={giocatoreVincente}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}

            </div>

        </div>
    );
}


export default GiocoCartaForbiceSasso