import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
import { fives, fours, threes } from "./Rules";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map((d) =>
        Math.ceil(Math.random() * 6),
      ),
      //add initial value as random num (), otherwise rolling func wouldn't appear after refreshing, because the scores obj are initially undefined.
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
      rolling: false,
    };
    console.log(this.state);
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }

  componentDidMount() {
    this.animateRoll();
  }

  //rolling start add timeout
  animateRoll() {
    this.setState(
      {
        rolling: true,
      },
      () => {
        setTimeout(this.roll, 1000);
      },
    );
  }

  //do roll and stop
  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6),
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft > 0 ? st.rollsLeft - 1 : 0,
      rolling: false,
    }));
  }

  toggleLocked(idx) {
    if (this.state.rollsLeft > 0 && !this.state.rolling) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      scores: {
        ...st.scores,
        [rulename]: ruleFn(this.state.dice),
      },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.animateRoll();
  }

  displayRollInfo() {
    const message = [
      "0 Rolls left",
      "1 Roll left",
      "2 Rolls left",
      "Starting Round",
    ];
    return message[this.state.rollsLeft];
    // message enthält 4 elemente
  }
  render() {
    const { dice, locked, handleClick, disabled, rollsLeft, rolling } =
      this.state;
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={dice}
              locked={locked}
              handleClick={this.toggleLocked}
              disabled={rollsLeft === 0}
              rolling={rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
                onClick={this.animateRoll}>
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
