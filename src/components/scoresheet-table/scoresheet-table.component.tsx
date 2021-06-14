import React from 'react';
import PlayerScoring from '../player-scoring/player-scoring.component';

const basketballColumns: string[] = ['No.', 'Player', 'F', '1P', '2P', '3P', 'PTS'];

interface Props {
  score: number;
  team: string;
  players: {}[];
  playersScore: {
    id: number;
    '1ptCount': number;
    '2ptCount': number;
    '3ptCount': number;
    total: number;
  }[];
}

const ScoresheetTable: React.FC<Props> = ({ players, score, team, playersScore }) => {
  const getPlayersTotal = (playerId: number) => {
    const arrayIndex = playersScore.findIndex((element: any) => element.id === playerId);
    return arrayIndex >= 0 ? playersScore[arrayIndex].total : 0;
  };
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
          playerTotalPoints={getPlayersTotal(player.id)}
          team={team}
        />
      ))}
    </div>
  );
};

export default ScoresheetTable;
