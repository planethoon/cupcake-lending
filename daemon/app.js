const Web3 = require("web3");
require("dotenv").config();
const config = require("./config/config");

const { Plan } = require("./models");
const { Op } = require("sequelize");

const abi = require("./config/abi");
const web3 = new Web3(config[process.env.NODE_ENV].provider);
const CupcakeContract = new web3.eth.Contract(
    abi,
    config[process.env.NODE_ENV].contractAddr
);

CupcakeContract.events.AddNewPlan({}, async (err, data) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const {
                lender,
                initialBalance,
                planId,
                planModelId,
                erc20ContractAddr,
            } = data.returnValues;
            const newPlan = await Plan.create({
                planId: planId,
                planModelId: planModelId,
                lender: lender,
                erc20ContractAddr: erc20ContractAddr,
                isStopped: false,
                initialBalance,
                availableBalance: initialBalance,
            });
        } catch (err) {
            console.log(err);
        }
    }
});

CupcakeContract.events.BeginLoan({}, async (err, data) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const { planId, nftPrice } = data.returnValues;
            const plan = await Plan.findOne({
                where: {
                    planId: planId,
                    availableBalance: {
                        [Op.gt]: Number(nftPrice),
                    },
                },
            });
            const updatedAvailableBalance =
                plan.dataValues.availableBalance - Number(nftPrice);
            const result = await Plan.update(
                {
                    availableBalance: updatedAvailableBalance,
                },
                {
                    where: {
                        planId: plan.dataValues.planId,
                    },
                }
            );
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
});

CupcakeContract.events.Repay({}, async (err, data) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const { planId, updatedAvailableBalance } = data.returnValues;
            const plan = await Plan.findOne({
                where: {
                    planId: Number(planId),
                },
            });
            const result = await Plan.update(
                {
                    availableBalance: Number(updatedAvailableBalance),
                },
                {
                    where: {
                        planId: Number(planId),
                    },
                }
            );
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
});

CupcakeContract.events.Withdraw({}, async (err, data) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const { planId, withdrawAmount } = data.returnValues;
            const plan = await Plan.findOne({
                where: {
                    planId: Number(planId),
                },
            });
            const result = await Plan.update(
                {
                    availableBalance: Number(withdrawAmount),
                },
                {
                    where: {
                        planId: Number(planId),
                    },
                }
            );
            console.log(result);
        } catch (err) {}
    }
});
