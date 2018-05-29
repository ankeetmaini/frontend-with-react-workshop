import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";

import { Async } from "react-select";
import "react-select/dist/react-select.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLocation: null
    };
    this.fetchLocations = this.fetchLocations.bind(this);
  }
  componentDidMount() {}

  fetchLocations(val) {
    return fetch(
      `https://developers.zomato.com/api/v2.1/locations?query=${val}`,
      {
        headers: {
          "user-key": "0527e31f81833a59ced3c84e92d0e513"
        }
      }
    )
      .then(r => r.json())
      .then(json => {
        return {
          options: json.location_suggestions.map(item => ({
            label: item.title,
            value: item.city_id
          }))
        };
      });
  }

  render() {
    return (
      <div>
        <h1>Lomato!</h1>
        <div />
        <Async
          name="form-field-name"
          value="one"
          loadOptions={this.fetchLocations}
          filterOptions={(options, filter, currentValues) => {
            // Do no filtering, just return all options
            return options;
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
