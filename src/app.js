import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import "./app.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import SelectLocation from "./SelectLocation";
import Collections from "./Collections";

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
      <BrowserRouter>
        <div>
          <h1>Lomato!</h1>
          <div />

          <SelectLocation
            value={this.state.selectedLocation}
            onChange={this.handleChange}
          />
          {this.state.selectedLocation && (
            <Collections location={this.state.selectedLocation} />
          )}
          {/* <a href="/a">A server refresh</a>
          <Link to="/a">Go to A</Link>
          <Link to="/b">Go to SelectLocation</Link>
          <Route path="/a" render={() => <h1>A</h1>} />

          <Route path="/b" component={SelectLocation} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
