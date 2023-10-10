

interface ResultMessageProps {
  risultato: string;
}

function ResultMessage({ risultato }: ResultMessageProps) {
  return risultato ? <h2 className='text-3xl'>{risultato}</h2> : null;
}

export default ResultMessage;
