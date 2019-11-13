import React from "react";
import Controls from "./control";
import ControlData from "./controlData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      controlData: Object.assign({}, ControlData),
      flexDirection: "",
      alignItems: "",
      justifyContent: ""
    };
    this.handleControlChange = this.handleControlChange.bind(this);
  }

  handleControlChange(item, key) {
    this.setState(prevState => {
      prevState.controlData[key] = prevState.controlData[key].map(d => {
        if (item.class === d.class) {
          d.checked = true;
        } else {
          d.checked = false;
        }
        return d;
      });

      return {
        [item.name]: item.class,
        controlData: prevState.controlData
      };
    });
  }

  getClassName() {
    const { flexDirection, alignItems, justifyContent } = this.state;
    const className = `d-flex height-300 ${flexDirection} ${alignItems} ${justifyContent}`;
    return className.trim();
  }

  render() {
    const className = this.getClassName();
    return (
      <div>
        <div className={className}>
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>
        <hr />
        <Controls
          data={this.state.controlData}
          onControlClick={this.handleControlChange}
        />
      </div>
    );
  }
}

export default App;
