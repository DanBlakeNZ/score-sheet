import React, { useState, useEffect } from 'react';
import { ScoreboardContextConsumer } from '../../context/scoreboard-context';

interface Props {
  playerId: number;
  playerNumber: number;
  playerName: string;
  team: string;
}

const PlayerScoring: React.FC<Props> = ({ playerId, playerName, playerNumber, team }) => {
  const [playerPoints1, setPlayerPoints1] = useState(0);
  const [playerPoints2, setPlayerPoints2] = useState(0);
  const [playerPoints3, setPlayerPoints3] = useState(0);
  const [score, setScore] = useState(0);

  const onChangeHandler = (event: any) => {
    const { name, value } = event.target;
    if (name === '1p') {
      setPlayerPoints1(value * 1);
    } else if (name === '2p') {
      setPlayerPoints2(value * 2);
    } else if (name === '3p') {
      setPlayerPoints3(value * 3);
    }
  };

  useEffect(() => {
    setScore(playerPoints1 + playerPoints2 + playerPoints3);
  }, [playerPoints1, playerPoints2, playerPoints3]);

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
          <span>{score}</span>
        </div>
      )}
    </ScoreboardContextConsumer>
  );
};

export default PlayerScoring;
