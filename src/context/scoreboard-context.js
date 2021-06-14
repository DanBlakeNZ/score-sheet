import React, { Component } from 'react';
import { chicagoBulls, newYorkKnicks } from '../data/players';

const { Provider, Consumer } = React.createContext();

class ScoreboardContextProvider extends Component {
  state = {
    homeTeamScore: 0,
    homeTeamPlayers: chicagoBulls,
    awayTeamScore: 0,
    awayTeamPlayers: newYorkKnicks,
    homeTeamPlayersScore: [],
    awayTeamPlayersScore: [],
  };

  updatePlayerScore = (event) => {
    const team = event.target.dataset.team;
    const playerId = parseInt(event.target.dataset.player_id);
    const { name, value } = event.target;

    // 1. Make a shallow copy of the items
    let teamPlayersScore =
      team === 'home'
        ? [...this.state.homeTeamPlayersScore]
        : [...this.state.awayTeamPlayersScore];

    const arrayIndex = teamPlayersScore.findIndex((element) => element.id === playerId);

    // 2. Make a shallow copy of the item you want to mutate
    let playerScore;
    if (arrayIndex >= 0) {
      playerScore = {
        ...teamPlayersScore[arrayIndex],
      };
    } else {
      playerScore = {
        id: playerId,
        '1ptCount': 0,
        '2ptCount': 0,
        '3ptCount': 0,
      };
    }

    // // // 3. Replace the property you're intested in
    playerScore[name] = parseInt(value);

    // // // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    if (arrayIndex >= 0) {
      teamPlayersScore[arrayIndex] = playerScore;
    } else {
      teamPlayersScore.push(playerScore);
    }

    const total1p = teamPlayersScore
      .map((player) => player['1ptCount'])
      .reduce((total, num) => total + num);

    const total2p = teamPlayersScore
      .map((player) => player['2ptCount'])
      .reduce((total, num) => total + num);

    const total3p = teamPlayersScore
      .map((player) => player['3ptCount'])
      .reduce((total, num) => total + num);

    const total = total1p + total2p * 2 + total3p * 3;
    console.log(total);

    // // // 5. Set the state to our new copy
    if (team === 'home') {
      this.setState({ homeTeamPlayersScore: teamPlayersScore });
      this.setState({ homeTeamScore: total });
    } else {
      this.setState({ awayTeamPlayersScore: teamPlayersScore });
      this.setState({ awayTeamScore: total });
    }
  };

  render() {
    return (
      <Provider
        value={{
          homeTeamScore: this.state.homeTeamScore,
          homeTeamPlayers: this.state.homeTeamPlayers,
          awayTeamScore: this.state.awayTeamScore,
          awayTeamPlayers: this.state.awayTeamPlayers,
          updatePlayerScore: this.updatePlayerScore,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ScoreboardContextProvider, Consumer as ScoreboardContextConsumer };
