const abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "erc20ContractAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "planModelId",
                type: "uint256",
            },
        ],
        name: "addNewPlan",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "planModelId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "planId",
                type: "uint256",
            },
        ],
        name: "AddNewPlan",
        type: "event",
    },
    {
        inputs: [],
        name: "addNewPlanModel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "nftContractAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nftPrice",
                type: "uint256",
            },
        ],
        name: "beginLoan",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "loanId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "nftContractAddr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nftPrice",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startDate",
                type: "uint256",
            },
        ],
        name: "BeginLoan",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "loanId",
                type: "uint256",
            },
        ],
        name: "liquidate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "nftContractAddr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nftPrice",
                type: "uint256",
            },
        ],
        name: "Liquidate",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "loanId",
                type: "uint256",
            },
        ],
        name: "repay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "loanId",
                type: "uint256",
            },
        ],
        name: "Repay",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "actualDuration",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualAllowance",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "loanDuration",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualRepaymentFee",
                type: "uint256",
            },
        ],
        name: "Repay2",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planId",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "withdrawAmount",
                type: "uint256",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "loans",
        outputs: [
            {
                internalType: "uint256",
                name: "planModelId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "planId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "loanId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "nftContractAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nftPrice",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "enum Test.loanStatus",
                name: "status",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "startDate",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "planModels",
        outputs: [
            {
                internalType: "uint256",
                name: "planModelId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "apr",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "planNumPerPlanModel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "plans",
        outputs: [
            {
                internalType: "uint256",
                name: "planId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "planModelId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                internalType: "address",
                name: "erc20ContractAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "availableBalance",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalLoanNum",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalPlanModelNum",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalPlanNum",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

module.exports = abi;
