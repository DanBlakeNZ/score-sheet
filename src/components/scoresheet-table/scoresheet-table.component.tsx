import React from 'react';
import PlayerScoring from '../player-scoring/player-scoring.component';

const basketballColumns: string[] = ['No.', 'Player', 'F', '1P', '2P', '3P', 'PTS'];

interface Props {
  score: number;
  players: {}[];
}

const ScoresheetTable: React.FC<Props> = ({ players, score }) => {
  return (
    <div className="scoresheet__table">
      <div className="row row__header">
        {basketballColumns.map((columnName: string, index: number) => (
          <span key={index}>{columnName}</span>
        ))}
      </div>

      {players.map((player: any, index: number) => (
        <PlayerScoring
          key={index}
          playerId={player.id}
          playerNumber={player.playerNumber}
          playerName={player.name}
        />
      ))}
    </div>
  );
};

export default ScoresheetTable;
