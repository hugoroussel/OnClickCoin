//Connecting to Ethereum via infura
import { endpoint, sendPrivKey } from "../config/config";
import buildDeployment from "./buildDeployment";

const Web3 = require("web3");
const EthTx = require("ethereumjs-tx");


async function deployContract(name, ticker, owner, supply) {
  var netID = document.getElementById("network");
  var network = netID.options[netID.selectedIndex].value;
  console.log("the network is", network);
  const web3 = new Web3(new Web3.providers.HttpProvider(endpoint[network]));

  const privateKeyFromBuffer = new Buffer(sendPrivKey, "hex");


  const tx = await new EthTx(await buildDeployment(name, ticker, owner, supply));
  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();
  web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), function(
    err,
    hash
  ) {
    if (!err) {
      console.log("successful deployment");
      console.log("transaction hash is", hash);
    } else {
      console.log(err);
    }
  });
}

export default deployContract;
