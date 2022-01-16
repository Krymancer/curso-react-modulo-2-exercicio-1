import React, { useState } from "react";

import "./index.scss";

type Props = {};

const Main: React.FC<Props> = () => {
  const title = process.env.REACT_APP_TITLE || "Title not found in env file";
  const [n1, sn1] = useState<number>(0);
  const [n2, sn2] = useState<number>(0);
  const [r, sr] = useState<number>(0);

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="content">
        <div>
          <input
            type="number"
            onChange={(e) => {
              sn1(parseInt(e.target.value));
            }}
            value={n1}
          />
          <input
            type="number"
            onChange={(e) => {
              sn2(parseInt(e.target.value));
            }}
            value={n2}
          />
        </div>
        <button
          onClick={() => {
            sr(n1 + n2);
          }}
        >
          +
        </button>
        <span>{r}</span>
      </div>
    </div>
  );
};

export default Main;
