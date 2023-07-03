import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

class ScoreTable extends Component {
  getTotalScore() {
    const { scores } = this.props;
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key];
    }
    return totalScore;
  }

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className='ScoreTable'>
        <section className='ScoreTable-section'>
          <h2>Upper</h2>
          <table cellSpacing='0'>
            <tbody>
              <RuleRow
                name='Ones'
                // description='Score 1 for every 1'
                description={ones.description}
                score={scores.ones}
                doScore={(evt) => doScore("ones", ones.evalRoll)}
              />
              <RuleRow
                name='Twos'
                // description='Score 2 for every 2'
                description={twos.description}
                score={scores.twos}
                doScore={(evt) => doScore("twos", twos.evalRoll)}
              />
              <RuleRow
                name='Threes'
                // description='Score 3 for every 3'
                description={threes.description}
                score={scores.threes}
                doScore={(evt) => doScore("threes", threes.evalRoll)}
              />
              <RuleRow
                name='Fours'
                // description='Score 4 for every 4'
                description={fours.description}
                score={scores.fours}
                doScore={(evt) => doScore("fours", fours.evalRoll)}
              />
              <RuleRow
                name='Fives'
                // description='Score 5 for every 5'
                description={fives.description}
                score={scores.fives}
                doScore={(evt) => doScore("fives", fives.evalRoll)}
              />
              <RuleRow
                name='Sixes'
                // description='Score 6 for every 6'
                description={sixes.description}
                score={scores.sixes}
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section className='ScoreTable-section ScoreTable-section-lower'>
          <h2>Lower</h2>
          <table cellSpacing='0'>
            <tbody>
              <RuleRow
                name='Three of Kind'
                // description='If 3+ of one value, score sum of all dice (otherwise, score 0)'
                description={threeOfKind.description}
                score={scores.threeOfKind}
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
              />
              <RuleRow
                name='Four of Kind'
                // description='If 4+ of one value, score sum of all dice (else 0)'
                description={fourOfKind.description}
                score={scores.fourOfKind}
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
              />
              <RuleRow
                name='Full House'
                // description='If 3 of one value and 2 of another, score 25 (else 0)'
                description={fullHouse.description}
                score={scores.fullHouse}
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
              />
              <RuleRow
                name='Small Straight'
                // description='If 4+ values in a row, score 30 (else 0)'
                description={smallStraight.description}
                score={scores.smallStraight}
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
              />
              <RuleRow
                name='Large Straight'
                // description='If 5 values in a row, score 40 (else 0)'
                description={largeStraight.description}
                score={scores.largeStraight}
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
              />
              <RuleRow
                name='Yahtzee'
                // description='If all values match, score 50 (else 0)'
                description={yahtzee.description}
                score={scores.yahtzee}
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
              />
              <RuleRow
                name='Chance'
                // description='Score sum of all dice'
                description={chance.description}
                score={scores.chance}
                doScore={(evt) => doScore("chance", chance.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section>
          <h2>TOTAL SCORE: {this.getTotalScore()}</h2>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
