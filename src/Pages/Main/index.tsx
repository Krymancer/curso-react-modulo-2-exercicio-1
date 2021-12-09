import React from "react";

import "./index.scss";

type Props = {};

type State = {
  title: string;
  n1: number;
  n2: number;
  result: number;
};

class Main extends React.Component<Props, State> {
  state: State = {
    title: process.env.REACT_APP_TITLE || "Title not found in env file",
    n1: 0,
    n2: 0,
    result: 0,
  };

  sn1(number: number) {
    this.setState((state) => ({
      n1: number,
    }));
  }

  sn2(number: number) {
    this.setState((state) => ({
      n2: number,
    }));
  }

  sr(number: number) {
    this.setState((state) => ({
      result: number,
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <div className="content">
          <div>
            <input
              type="number"
              onChange={(e) => {
                this.sn1(parseInt(e.target.value));
              }}
              value={this.state.n1}
            />
            <input
              type="number"
              onChange={(e) => {
                this.sn2(parseInt(e.target.value));
              }}
              value={this.state.n2}
            />
          </div>
          <button
            onClick={() => {
              this.sr(this.state.n1 + this.state.n2);
            }}
          >
            +
          </button>
          <span>{this.state.result}</span>
        </div>
      </div>
    );
  }
}

export default Main;
