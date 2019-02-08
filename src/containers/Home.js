import React, { Component } from "react";
import DropdownNet from "../components/dropdownNet"
import SendForm from "../components/sendForm"
import TransactButton from "../components/transactionButton";
import ConstructorForm from "../components/constructorForm"

class Home extends Component {
  render() {
    return (
      <div>
          <div className="OnClickCoin"><h1>Welcome to OnClickCoin!</h1></div>
          <DropdownNet></DropdownNet>
          <br></br><br></br>
          <SendForm></SendForm>
          <br></br>
          <ConstructorForm></ConstructorForm>
          <br></br>
          <TransactButton></TransactButton>

      </div>
    );
  }
}

export default Home;
