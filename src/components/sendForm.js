import React, { Component } from "react";

class SendForm extends Component {
  render() {
    return (
      <div>
          <h3>Optional transaction parameters</h3>
        <form id="sendForm">
        <input type="text" name="gasPrice" placeholder="Gas Price"></input><br></br>
        <input type="text" name="gasLimit" placeholder="Gas Limit"></input><br></br>
        </form>
      </div>
    );
  }
}

export default SendForm;
