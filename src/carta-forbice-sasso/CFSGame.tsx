import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import PlayerChoice from "./PlayerChoice";
import ChoiceButton from "./ChoiceButton";
import ResultMessage from "./ResultMessage";
import PlayerScore from "./PlayerScore";
import ResetButton from "./ResetButton";
import GameMode from "./GameMode";

interface CFSGameProps {
    uman: boolean;
}
function calcolaRisultato(sceltaGiocatore1: string, sceltaGiocatore2: string, lizardSpockMode: boolean) {
    if (sceltaGiocatore1 === sceltaGiocatore2) {
        return 0; // Pareggio
    } else if (!lizardSpockMode) {
        // Logica per il gioco standard
        if (
            (sceltaGiocatore1 === 'Carta' && sceltaGiocatore2 === 'Sasso') ||
            (sceltaGiocatore1 === 'Forbice' && sceltaGiocatore2 === 'Carta') ||
            (sceltaGiocatore1 === 'Sasso' && sceltaGiocatore2 === 'Forbice')
        ) {
            return 1; // Giocatore 1 vince
        } else {
            return 2; // Giocatore 2 vince
        }
    } else {
        // Logica per il gioco con modalità Lizard-Spock
        if (
            (sceltaGiocatore1 === 'Carta' && (sceltaGiocatore2 === 'Sasso' || sceltaGiocatore2 === 'Lizard')) ||
            (sceltaGiocatore1 === 'Forbice' && (sceltaGiocatore2 === 'Carta' || sceltaGiocatore2 === 'Lizard')) ||
            (sceltaGiocatore1 === 'Sasso' && (sceltaGiocatore2 === 'Forbice' || sceltaGiocatore2 === 'Lizard')) ||
            (sceltaGiocatore1 === 'Lizard' && (sceltaGiocatore2 === 'Spock' || sceltaGiocatore2 === 'Carta')) ||
            (sceltaGiocatore1 === 'Spock' && (sceltaGiocatore2 === 'Forbice' || sceltaGiocatore2 === 'Sasso'))
        ) {
            return 1; // Giocatore 1 vince
        } else {
            return 2; // Giocatore 2 vince
        }
    }
}


function CFSGame({ uman }: CFSGameProps) {
    const [partita, setPartita] = useState({
        sceltaGiocatore1: "",
        sceltaGiocatore2: "",
        giocatoreVincente: 0,
        vittorieGiocatore1: 0,
        vittorieGiocatore2: 0,
        risultato: "",
    });
    const [lizardSpockMode, setLizardSpockMode] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const giocata = (scelta1: string) => {
        setPartita((prevPartita) => ({
            ...prevPartita,
            sceltaGiocatore1: scelta1
        }))
        if (!lizardSpockMode) {
            const sceltaCasuale2 = Math.floor(Math.random() * 3);
            const scelte = ["Carta", "Forbice", "Sasso"];
            setPartita((prevPartita) => ({
                ...prevPartita,
                sceltaGiocatore2: scelte[sceltaCasuale2],
            }));
        } else {
            const sceltaCasuale2 = Math.floor(Math.random() * 5);
            const scelte = ["Carta", "Forbice", "Sasso", "Lizard", "Spock"];
            setPartita((prevPartita) => ({
                ...prevPartita,
                sceltaGiocatore2: scelte[sceltaCasuale2],
            }));
        }
    };

    useEffect(() => {
        if (partita.sceltaGiocatore1 === "" || partita.sceltaGiocatore2 === "") {
            return;
        }

        if (!isProcessing) {
            setIsProcessing(true); // Imposta isProcessing a true prima di iniziare l'elaborazione

            const risultatoPartita = calcolaRisultato(
                partita.sceltaGiocatore1,
                partita.sceltaGiocatore2,
                lizardSpockMode
            );

            setPartita((prevPartita) => ({
                ...prevPartita,
                giocatoreVincente: risultatoPartita,
            }));

            if (risultatoPartita === 1) {
                // Giocatore 1 vince
                setPartita((prevPartita) => ({
                    ...prevPartita,
                    vittorieGiocatore1: prevPartita.vittorieGiocatore1 + 1,
                    risultato: "Giocatore 1 ha vinto!",
                }));
            } else if (risultatoPartita === 2) {
                // Giocatore 2 vince
                setPartita((prevPartita) => ({
                    ...prevPartita,
                    vittorieGiocatore2: prevPartita.vittorieGiocatore2 + 1,
                    risultato: "Giocatore 2 ha vinto!",
                }));
            } else {
                // Pareggio
                setPartita((prevPartita) => ({
                    ...prevPartita,
                    risultato: "Pareggio!",
                }));
            }

            setIsProcessing(false); // Imposta isProcessing a false dopo che il calcolo dei risultati è stato completato
        }
    }, [partita.sceltaGiocatore1, partita.sceltaGiocatore2, lizardSpockMode, isProcessing]);


    const simulaPartita = () => {
        if (!lizardSpockMode) {
            const sceltaCasuale = Math.floor(Math.random() * 3);
            const scelte = ["Carta", "Forbice", "Sasso"];
            giocata(scelte[sceltaCasuale]);
        } else {
            const sceltaCasuale = Math.floor(Math.random() * 5);
            const scelte = ["Carta", "Forbice", "Sasso", "Lizard", "Spock"];
            giocata(scelte[sceltaCasuale]);
        }
    };

    const resetVittorie = () => {
        setPartita((prevPartita) => ({
            ...prevPartita,
            vittorieGiocatore1: 0,
            vittorieGiocatore2: 0,
            risultato: "", // Reimposta anche il risultato
        }));
    };


    return (
        <div>
            <Link to="/carta-forbice-sasso" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center hover:underline">
                <IoMdArrowRoundBack className="mr-2" />
                Indietro
            </Link>
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-5xl mb-4 mt-4">{uman ? "Gioca contro il Computer" : "Simula partita tra Computer"}</h1>
                <div>
                    <GameMode
                        lizardSpockMode={lizardSpockMode}
                        setLizardSpockMode={setLizardSpockMode}
                    />
                    {uman ? (
                        <div className="flex mb-5 mt-3">
                            <ChoiceButton label="Carta" onClick={() => giocata("Carta")} />
                            <ChoiceButton label="Forbice" onClick={() => giocata("Forbice")} />
                            <ChoiceButton label="Sasso" onClick={() => giocata("Sasso")} />
                            {lizardSpockMode && (
                                <>
                                    <ChoiceButton label="Lizard" onClick={() => giocata("Lizard")} />
                                    <ChoiceButton label="Spock" onClick={() => giocata("Spock")} />
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="flex justify-center mb-5 mt-3">
                            <ChoiceButton label="SIMULA" onClick={() => simulaPartita()} />
                        </div>
                    )}
                    <div className="flex flex-col items-center h-screen">
                        <div className="flex mt-2">
                            <PlayerScore playerNumber={1} score={partita.vittorieGiocatore1} win={partita.vittorieGiocatore1 > partita.vittorieGiocatore2} />
                            <PlayerScore playerNumber={2} score={partita.vittorieGiocatore2} win={partita.vittorieGiocatore2 > partita.vittorieGiocatore1} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            {partita.sceltaGiocatore1 && partita.sceltaGiocatore2 && (
                                <div className="flex">
                                    <div className="flex">
                                        <PlayerChoice
                                            numeroGiocatore={1}
                                            sceltaGiocatore={partita.sceltaGiocatore1}
                                            giocatoreVincente={partita.giocatoreVincente}
                                        />
                                        <PlayerChoice
                                            numeroGiocatore={2}
                                            sceltaGiocatore={partita.sceltaGiocatore2}
                                            giocatoreVincente={partita.giocatoreVincente}
                                        />
                                    </div>
                                </div>
                            )}
                            <ResultMessage risultato={partita.risultato} />
                            {partita.vittorieGiocatore1 > 0 || partita.vittorieGiocatore2 > 0 ? (
                                <ResetButton onClick={resetVittorie} />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CFSGame