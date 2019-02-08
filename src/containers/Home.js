import React, { Component } from "react";
import DropdownNet from "../components/dropdownNet"
import SendForm from "../components/sendForm"
import TransactButton from "../components/transactionButton";

class Home extends Component {
  render() {
    return (
      <div>

        <div className="OnClickCoin">Welcome to OnClickCoin!</div>
        <DropdownNet></DropdownNet>
        <br></br><br></br>
        <SendForm></SendForm>
        <br></br>
        <TransactButton></TransactButton>
      <div>
          <h3>Name</h3>
          <input id= "name" placeholder="Bitconnect"/>
      </div>
      <div>
          <h3>Ticker</h3>
          <input id="ticker" placeholder="BCC"/>
      </div>
      <div>
          <h3>Owner. All tokens will be sent to the owner</h3>
          <input id="owner" placeholder="0xabc..."/>
      </div>
      </div>
    );
  }
}

export default Home;
