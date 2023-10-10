import React from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa';

interface PlayerChoiceProps {
  numeroGiocatore: number;
  sceltaGiocatore: string;
  giocatoreVincente: number;
}

const PlayerChoice: React.FC<PlayerChoiceProps> = ({
  numeroGiocatore,
  sceltaGiocatore,
  giocatoreVincente,
}) => {
  let iconComponent: JSX.Element | null = null;
  let iconColor = '';


  if (giocatoreVincente === numeroGiocatore) {
    iconColor = 'green';
  } else if (giocatoreVincente === 0 && giocatoreVincente !== numeroGiocatore) {
    iconColor = 'black';
  } else if (giocatoreVincente !== numeroGiocatore && giocatoreVincente !== 0) {
    iconColor = 'red';
  }


  if (sceltaGiocatore === 'Carta') {
    iconComponent = <FaHandPaper color={iconColor} size={50} />;
  } else if (sceltaGiocatore === 'Sasso') {
    iconComponent = <FaHandRock color={iconColor} size={50} />;
  } else if (sceltaGiocatore === 'Forbice') {
    iconComponent = <FaHandScissors color={iconColor} size={50} />;
  } else if (sceltaGiocatore === 'Lizard') {
    iconComponent = <FaHandLizard color={iconColor} size={50} />;
  } else if (sceltaGiocatore === 'Spock') {
    iconComponent = <FaHandSpock color={iconColor} size={50} />;
  }

  return (
    <div className={`flex flex-col items-center justify-center  p-4 transition duration-300 mr-4`}>
      {iconComponent}
    </div>
  );
};

export default PlayerChoice;