import React, { Component } from "react";
import "./Die.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

class Die extends Component {
  static defaultProps = {
    sides: [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ],
  };
  // font in array -> kein String
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { sides, locked, val, disabled, rolling } = this.props;
    let diceClass = "faDice";
    diceClass += this.props.locked ? " faDice-locked" : "";
    return (
      <FontAwesomeIcon
        className={`${diceClass} ${this.props.rolling ? "faDice-rolling" : ""}`}
        icon={sides[val - 1]}
        onClick={this.handleClick}
        disabled={disabled}
        rolling={rolling}
      />
    );
  }
}

export default Die;
