import React, { Component } from "react";

class constructorForm extends Component {
    render(){
        return(
            <div>
                <form id="constructorForm">
                    Name:<input id= "name" placeholder="Bitconnect"/><br></br>
                    Ticker:<input id="ticker" placeholder="BCC"/><br></br>
                    Owner:<input id="owner" placeholder="0xabc..."/><br></br>
                </form>
            </div>
        );
    }
}
export default constructorForm