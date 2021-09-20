import "./Style.css";

import React from "react";


let key = Date.now();

export default (props) => (
  <>
    <svg className="checkbox-symbol7264234">
      <symbol id="check9018276" viewBox="0 0 12 10">
        <polyline
          points="1.5 6 4.5 9 10.5 1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polyline>
      </symbol>
    </svg>

    <div className="checkbox-container367564258">
      <input
        className="checkbox-input34276613"
        id={"checkbox" + ++key}
        type="checkbox"
        defaultChecked={props.checked}
      />
      <label className="checkbox37541464352" htmlFor={"checkbox" + key}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check9018276"></use>
          </svg>
        </span>
        <span>{props.label || props.name}</span>
      </label>
    </div>
  </>
);
