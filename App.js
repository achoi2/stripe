import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { TabList, Tab } from "./Tabs.js";
import Checkout from "./Checkout.js";
import { withStripe } from "./StripeApi.js";
import Charges from "./Charges.js";

class App extends Component {
  render() {
    const WrappedCheckout = withStripe(
      Checkout,
      "pk_test_7z2zw5puDbYpuJ4BX7kQOtY7",
      "sk_test_ZFbBGjZZP6lUN2MANX81AULS"
    );

    const WrappedCharges = withStripe(
      Charges,
      "pk_test_7z2zw5puDbYpuJ4BX7kQOtY7",
      "sk_test"
    );
    return (
      <TabList>
        <Tab name="Checkout">
          <WrappedCheckout />
        </Tab>
        <Tab name="Charges">
          <WrappedCharges />
        </Tab>
        <Tab name="Disputes">
          <div>
            <h2>Hello C</h2>
          </div>
        </Tab>
      </TabList>
    );
  }
}

export default App;
