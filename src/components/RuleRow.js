import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, name, description, doScore } = this.props;
    // == const score = this.props.score
    const disabled = score !== undefined; // =true
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        onClick={disabled ? null : doScore}>
        <td className='RuleRow-name'>{name}</td>
        <td className='RuleRow-score'>{disabled ? score : description}</td>
      </tr>
    );
  }
}

export default RuleRow;
