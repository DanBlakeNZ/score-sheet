import React, { Component } from 'react';
import { chicagoBulls, newYorkKnicks } from '../data/players';

const { Provider, Consumer } = React.createContext();

class ScoreboardContextProvider extends Component {
  state = {
    homeTeamScore: 56,
    homeTeamPlayers: chicagoBulls,
    awayTeamScore: 43,
    awayTeamPlayers: newYorkKnicks,
  };

  render() {
    return (
      <Provider
        value={{
          homeTeamScore: this.state.homeTeamScore,
          homeTeamPlayers: this.state.homeTeamPlayers,
          awayTeamScore: this.state.awayTeamScore,
          awayTeamPlayers: this.state.awayTeamPlayers,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ScoreboardContextProvider, Consumer as ScoreboardContextConsumer };
