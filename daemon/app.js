const Web3 = require("web3");
require("dotenv").config();
const config = require("./config/config");
const abi = require("./config/abi");
const web3 = new Web3(config[process.env.NODE_ENV].provider);
const CupcakeContract = new web3.eth.Contract(
    abi,
    config[process.env.NODE_ENV].contractAddr
);

CupcakeContract.events.allEvents({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const eventName = data.event;
        if (eventName == "AddNewPlan") {
            console.log(data);
        } else if (eventName == "BeginLoan") {
        } else if (eventName == "Repay") {
        } else if (eventName == "Withdraw") {
        } else if (eventName == "Liquidate") {
        }
    }
});
