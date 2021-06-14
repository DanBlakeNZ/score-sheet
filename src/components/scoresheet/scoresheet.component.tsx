import React from 'react';
import { ScoreboardContextConsumer } from '../../context/scoreboard-context';
import Card from '../card/card.component';
import ScoresheetTable from '../scoresheet-table/scoresheet-table.component';

export const Scoresheet: React.FC = () => {
  return (
    <ScoreboardContextConsumer>
      {({
        homeTeamPlayers,
        homeTeamScore,
        awayTeamPlayers,
        awayTeamScore,
        homeTeamPlayersScore,
        awayTeamPlayersScore,
      }) => (
        <div className="scoresheet basketball">
          <Card>
            <div className="scoresheet__team-name padding-normal">Chicago Bulls</div>
            <ScoresheetTable
              players={homeTeamPlayers}
              score={homeTeamScore}
              playersScore={homeTeamPlayersScore}
              team={'home'}
            />
          </Card>
          <Card>
            <div className="scoresheet__team-name padding-normal">New York Knicks</div>
            <ScoresheetTable
              players={awayTeamPlayers}
              score={awayTeamScore}
              playersScore={awayTeamPlayersScore}
              team={'away'}
            />
          </Card>
        </div>
      )}
    </ScoreboardContextConsumer>
  );
};

export default Scoresheet;
