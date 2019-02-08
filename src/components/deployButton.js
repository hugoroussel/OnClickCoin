import React, { Component } from "react";
import deployContract from "../utils/deployContract";

class DeployButton extends Component {
  handleClick(event) {
    const formInfo = document.getElementById("constructorForm")
    const name = formInfo[0].value
      console.log(name)
    deployContract();
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click here to deploy your new Contract!</button>;
  }
}

export default DeployButton;
