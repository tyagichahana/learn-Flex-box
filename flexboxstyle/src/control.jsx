import React from "react";

const Controls = ({ data, onControlClick }) => {
  return (
    <div className="d-flex">
      <div className="control-col">
        Direction
        <div>
          {data.direction.map((item, i) => (
            <label key={i}>
              <input
                type="radio"
                name={item.name}
                checked={item.checked}
                onClick={() => onControlClick(item, "direction")}
              />{" "}
              {item.title}
            </label>
          ))}
        </div>
      </div>
      <div className="control-col">
        Justify
        <div>
          {data.justify.map((item, i) => (
            <label key={i}>
              <input
                type="radio"
                name={item.name}
                checked={item.checked}
                onClick={() => onControlClick(item, "justify")}
              />{" "}
              {item.title}
            </label>
          ))}
        </div>
      </div>
      <div className="control-col">
        Align Items
        <div>
          {data.alignItems.map((item, i) => (
            <label key={i}>
              <input
                type="radio"
                name={item.name}
                checked={item.checked}
                onClick={() => onControlClick(item, "alignItems")}
              />{" "}
              {item.title}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Controls;
