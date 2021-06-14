import React from 'react';
import { ScoreboardContextConsumer } from '../../context/scoreboard-context';
import Card from '../card/card.component';

const Scoreboard: React.FC = () => {
  return (
    <ScoreboardContextConsumer>
      {({ homeTeamScore, awayTeamScore }) => (
        <Card>
          <div className="scoreboard padding-normal">
            <div className="scoreboard__team">
              <img
                className="scoreboard__logo"
                src="https://res.cloudinary.com/dblakenzcloud/image/upload/v1623634395/PlayHQ/chicago-bulls-logo.svg"
                alt="Chicago Bulls Logo"
              />
              <span className="center-element">Chicago Bulls</span>
            </div>
            <div className="scoreboard__score">{homeTeamScore}</div>
            <div className="scoreboard__score scoreboard__losing">{awayTeamScore}</div>
            <div className="scoreboard__team">
              <span className="center-element">New York Knicks</span>
              <img
                className="scoreboard__logo"
                src="https://res.cloudinary.com/dblakenzcloud/image/upload/v1623634399/PlayHQ/new-york-knicks-logo.svg"
                alt="New York Knicks Logo"
              />
            </div>
          </div>
        </Card>
      )}
    </ScoreboardContextConsumer>
  );
};

export default Scoreboard;
