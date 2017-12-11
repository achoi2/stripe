import React, { Component } from "react";
import _ from "lodash";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestCharge: "None"
    };
    this.createCharge = this.createCharge.bind(this);
  }

  createCharge() {
    this.setState(
      {
        latestCharge: "Creating token..."
      },
      () => {
        this.props
          .postPublic("tokens", {
            "card[number]": "4242424242424242",
            "card[exp_month]": "02",
            "card[exp_year]": "2018"
          })
          .then(token => {
            this.setState({
              latestCharge: "Creating charge..."
            });
            return this.props.postSecret("charges", {
              amount: 2000,
              currency: "usd",
              description: "test charge",
              source: token.id
            });
          })
          .then(charge => {
            this.setState({
              latestCharge: charge.id
            });
          });
      }
    );
  }

  render() {
    let showCharge = this.state.latestCharge;
    if (this.state.latestCharge) {
      null;
    } else {
      alert("Netwok Error");
    }

    return (
      <div>
        <h2>Checkout</h2>
        <button onClick={this.createCharge}>Charge</button>
        <p>Latest charge: {showCharge}</p>
      </div>
    );
  }
}
export default Checkout;
