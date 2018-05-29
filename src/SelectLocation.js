import React from "react";

import { Async } from "react-select";
import "react-select/dist/react-select.css";

export default class SelectLocation extends React.Component {
  constructor() {
    super();
    this.fetchLocations = this.fetchLocations.bind(this);
  }
  async fetchLocations(val) {
    return fetch(
      `https://developers.zomato.com/api/v2.1/locations?query=${val}`,
      {
        headers: {
          "user-key": ""
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
        <Async
          name="form-field-name"
          value={this.props.value}
          loadOptions={this.fetchLocations}
          onChange={this.props.onChange}
          filterOptions={(options, filter, currentValues) => {
            // Do no filtering, just return all options
            return options;
          }}
        />
      </div>
    );
  }
}
