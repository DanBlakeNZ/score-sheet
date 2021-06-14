import React from 'react';
import { ScoreboardContextConsumer } from '../../context/scoreboard-context';

interface Props {
  playerId: number;
  playerNumber: number;
  playerName: string;
  team: string;
  playerTotalPoints: number;
}

const PlayerScoring: React.FC<Props> = ({
  playerId,
  playerName,
  playerNumber,
  team,
  playerTotalPoints,
}) => {
  return (
    <ScoreboardContextConsumer>
      {({ updatePlayerScore }) => (
        <div className="player-scoring row">
          <span>{playerNumber}</span>
          <span>{playerName}</span>
          <input
            type="number"
            name="fouls"
            data-team={team}
            data-player_id={playerId}
            onChange={updatePlayerScore}
          ></input>
          <input
            type="number"
            name="1ptCount"
            data-team={team}
            data-player_id={playerId}
            onChange={updatePlayerScore}
          ></input>
          <input
            type="number"
            name="2ptCount"
            data-team={team}
            data-player_id={playerId}
            onChange={updatePlayerScore}
          ></input>
          <input
            type="number"
            name="3ptCount"
            data-team={team}
            data-player_id={playerId}
            onChange={updatePlayerScore}
          ></input>
          <span>{playerTotalPoints}</span>
        </div>
      )}
    </ScoreboardContextConsumer>
  );
};

export default PlayerScoring;
