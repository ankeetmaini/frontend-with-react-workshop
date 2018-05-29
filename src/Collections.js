import React from "react";

import callAPI from "./apiCaller";

export default class Collections extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: []
    };
  }
  async componentDidMount() {
    const collections = await callAPI(
      `https://developers.zomato.com/api/v2.1/collections?city_id=${
        this.props.location.value
      }`
    );

    this.setState({ collections: collections.collections });
  }

  render() {
    return (
      <div>
        <h3>list of collections</h3>
        {this.state.collections.map(c => (
          <div>
            {c.collection.description}{" "}
            <div>
              <img src={c.collection.image_url} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
