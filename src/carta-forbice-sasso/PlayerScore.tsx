
interface PlayerScoreProps {
  playerNumber: number;
  score: number;
  win: boolean;
}

function PlayerScore({ playerNumber, score, win}: PlayerScoreProps) {
  return (
    <p className={`text-lg mr-4`}>
      Giocatore {playerNumber}:{" "}
      <span className={`font-semibold ${win ? "text-green-500" : ""}`}>
        {score}
      </span>
    </p>
  );
}

export default PlayerScore;
