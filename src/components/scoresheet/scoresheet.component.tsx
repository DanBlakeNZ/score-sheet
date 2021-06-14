import React from 'react';
import { ScoreboardContextConsumer } from '../../context/scoreboard-context';
import Card from '../card/card.component';
import ScoresheetTable from '../scoresheet-table/scoresheet-table.component';

export const Scoresheet: React.FC = () => {
  return (
    <ScoreboardContextConsumer>
      {({ homeTeamPlayers, homeTeamScore, awayTeamPlayers, awayTeamScore }) => (
        <div className="scoresheet basketball">
          <Card>
            <div className="scoresheet__team-name padding-normal">Chicago Bulls</div>
            <ScoresheetTable players={homeTeamPlayers} score={homeTeamScore} />
          </Card>
          <Card>
            <div className="scoresheet__team-name padding-normal">New York Knicks</div>
            <ScoresheetTable players={awayTeamPlayers} score={awayTeamScore} />
          </Card>
        </div>
      )}
    </ScoreboardContextConsumer>
  );
};

export default Scoresheet;
