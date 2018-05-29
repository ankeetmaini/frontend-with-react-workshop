import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
    this.fetchLocations = this.fetchLocations.bind(this);
  }
  componentDidMount() {}

  async fetchLocations(event) {
    const val = event.target.value;

    const locations = await fetch(
      `https://developers.zomato.com/api/v2.1/locations?query=${val}`,
      {
        headers: {
          "user-key": "a891e3e4af4044d83dbb53e26c28f876"
        }
      }
    ).then(r => r.json());
    this.setState({
      locations: locations.location_suggestions
    });
  }

  render() {
    return (
      <div>
        <h1>Lomato!</h1>
        <input
          type="text"
          placeholder="enter location"
          onChange={this.fetchLocations}
        />
        <div />
        list of locations
        {this.state.locations.map(l => (
          <div>
            {l.city_name}, {l.country_name}
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
