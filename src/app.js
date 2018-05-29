import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";

import SelectLocation from "./SelectLocation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLocation: null
    };
  }
  componentDidMount() {}

  handleChange = option => {
    this.setState({ selectedLocation: option });
  };

  render() {
    return (
      <div>
        <h1>Lomato!</h1>
        <div />
        <SelectLocation
          value={this.state.selectedLocation}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
