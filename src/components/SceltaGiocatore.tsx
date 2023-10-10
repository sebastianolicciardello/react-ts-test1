import React from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

interface SceltaGiocatoreProps {
  numeroGiocatore: number;
  sceltaGiocatore: string;
  giocatoreVincente: number;
}

const SceltaGiocatore: React.FC<SceltaGiocatoreProps> = ({
  numeroGiocatore,
  sceltaGiocatore,
  giocatoreVincente,
}) => {
  let iconComponent: JSX.Element | null = null;
  let iconColor = '';


  if (giocatoreVincente === numeroGiocatore) {
    iconColor = 'green';
  } else {
    iconColor = 'red';
  }

  if (sceltaGiocatore === 'Carta') {
    iconComponent = <FaHandPaper color={iconColor} size={50} />;
  } else if (sceltaGiocatore === 'Sasso') {
    iconComponent = <FaHandRock color={iconColor} size={50} />;
  } else if (sceltaGiocatore === 'Forbice') {
    iconComponent = <FaHandScissors color={iconColor} size={50} />;
  }


  return (
    <div className={`flex flex-col items-center justify-center  p-4 transition duration-300 mr-4`}>
      {iconComponent}
    </div>
  );
};

export default SceltaGiocatore;