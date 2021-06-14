import React from 'react';
import { ScoreboardContextProvider } from '../../context/scoreboard-context';
import Scoreboard from '../../components/scoreboard/scoreboard.component';
import Scoresheet from '../../components/scoresheet/scoresheet.component';

const ScoresheetPage: React.FC = () => {
  return (
    <ScoreboardContextProvider>
      <section className="scoreboard-page">
        <Scoreboard />
        <Scoresheet />
      </section>
    </ScoreboardContextProvider>
  );
};

export default ScoresheetPage;
