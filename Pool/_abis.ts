export default {
    "allov2.Allo": [
        {
            "inputs": [],
            "name": "AMOUNT_MISMATCH",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "BaseFeePaid",
            "type": "event",
            "signature": "0x02e340b51c6ae66fd22509c9b016f224c47a54063d4259fe3d860958e9eaac72"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseFee",
                    "type": "uint256"
                }
            ],
            "name": "BaseFeeUpdated",
            "type": "event",
            "signature": "0x803bee7e92bbc6ae7a1551f9f4ed3e31a8ea8df32e93332f41b0028f1091f9c3"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "feePercentage",
                    "type": "uint256"
                }
            ],
            "name": "FeePercentageUpdated",
            "type": "event",
            "signature": "0x74516f05eb4bd2461d57aa1e935ee553f86a3e02bfed7759f2f772915de3d9be"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "version",
                    "type": "uint8"
                }
            ],
            "name": "Initialized",
            "type": "event",
            "signature": "0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pendingOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipHandoverCanceled",
            "type": "event",
            "signature": "0xfa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pendingOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipHandoverRequested",
            "type": "event",
            "signature": "0xdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "oldOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event",
            "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "profileId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "contract IStrategy",
                    "name": "strategy",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "protocol",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "pointer",
                            "type": "string"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct Metadata",
                    "name": "metadata",
                    "type": "tuple"
                }
            ],
            "name": "PoolCreated",
            "type": "event",
            "signature": "0x69bcb5a6cf6a3c95185cbb451e77787240c866dd2e8332597e3013ff18a1aba1"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                }
            ],
            "name": "PoolFunded",
            "type": "event",
            "signature": "0xbf59838198f4ea92f663f5c1fc697f151a1b746b7dff86d564f250a55cbb4851"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "protocol",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "pointer",
                            "type": "string"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct Metadata",
                    "name": "metadata",
                    "type": "tuple"
                }
            ],
            "name": "PoolMetadataUpdated",
            "type": "event",
            "signature": "0x14f52b76bda9e4c482842cefda2968d332933577988f224e80aae18fba10edf0"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "registry",
                    "type": "address"
                }
            ],
            "name": "RegistryUpdated",
            "type": "event",
            "signature": "0xd6ceddf6d2a22f21c7c81675c518004eff43bc5c8a6fc32a0b748e69d58671cd"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "previousAdminRole",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newAdminRole",
                    "type": "bytes32"
                }
            ],
            "name": "RoleAdminChanged",
            "type": "event",
            "signature": "0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleGranted",
            "type": "event",
            "signature": "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleRevoked",
            "type": "event",
            "signature": "0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "strategy",
                    "type": "address"
                }
            ],
            "name": "StrategyApproved",
            "type": "event",
            "signature": "0x960dd94cbb79169f09a4e445d58b895df2d9bffa5b31055d0932d801724a20d1"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "strategy",
                    "type": "address"
                }
            ],
            "name": "StrategyRemoved",
            "type": "event",
            "signature": "0x09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea4"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "treasury",
                    "type": "address"
                }
            ],
            "name": "TreasuryUpdated",
            "type": "event",
            "signature": "0x7dae230f18360d76a040c81f050aa14eb9d6dc7901b20fc5d855e2a20fe814d1"
        },
        {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xa217fddf"
        },
        {
            "inputs": [],
            "name": "FEE_DENOMINATOR",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xd73792a9"
        },
        {
            "inputs": [],
            "name": "NATIVE",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xa0cf0aea"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_manager",
                    "type": "address"
                }
            ],
            "name": "addPoolManager",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x2cf682b0"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_strategy",
                    "type": "address"
                }
            ],
            "name": "addToCloneableStrategies",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x41bba0b4"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "allocate",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x2ec38188"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_poolIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "_datas",
                    "type": "bytes[]"
                }
            ],
            "name": "batchAllocate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xc6dff1cf"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_poolIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "_data",
                    "type": "bytes[]"
                }
            ],
            "name": "batchRegisterRecipient",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x1a20bd88"
        },
        {
            "inputs": [],
            "name": "cancelOwnershipHandover",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x54d1f13d"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "pendingOwner",
                    "type": "address"
                }
            ],
            "name": "completeOwnershipHandover",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0xf04e283e"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_profileId",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_strategy",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_initStrategyData",
                    "type": "bytes"
                },
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "protocol",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "pointer",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Metadata",
                    "name": "_metadata",
                    "type": "tuple"
                },
                {
                    "internalType": "address[]",
                    "name": "_managers",
                    "type": "address[]"
                }
            ],
            "name": "createPool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x77da8caf"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_profileId",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_strategy",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_initStrategyData",
                    "type": "bytes"
                },
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "protocol",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "pointer",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Metadata",
                    "name": "_metadata",
                    "type": "tuple"
                },
                {
                    "internalType": "address[]",
                    "name": "_managers",
                    "type": "address[]"
                }
            ],
            "name": "createPoolWithCustomStrategy",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0xe1007d4a"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "_recipientIds",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "distribute",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x3a5fbd92"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "fundPool",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x5acd6fac"
        },
        {
            "inputs": [],
            "name": "getBaseFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x15e812ad"
        },
        {
            "inputs": [],
            "name": "getFeePercentage",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x11efbf61"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                }
            ],
            "name": "getPool",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "profileId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "contract IStrategy",
                            "name": "strategy",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "protocol",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "pointer",
                                    "type": "string"
                                }
                            ],
                            "internalType": "struct Metadata",
                            "name": "metadata",
                            "type": "tuple"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "managerRole",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "adminRole",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct IAllo.Pool",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x068bcd8d"
        },
        {
            "inputs": [],
            "name": "getRegistry",
            "outputs": [
                {
                    "internalType": "contract IRegistry",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x5ab1bd53"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                }
            ],
            "name": "getRoleAdmin",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x248a9ca3"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                }
            ],
            "name": "getStrategy",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xcfc0cc34"
        },
        {
            "inputs": [],
            "name": "getTreasury",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x3b19e84a"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x2f2ff15d"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "hasRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x91d14854"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_registry",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "_treasury",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_feePercentage",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_baseFee",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xeb990c59"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_strategy",
                    "type": "address"
                }
            ],
            "name": "isCloneableStrategy",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xab2ec589"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "isPoolAdmin",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xab3febc6"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "isPoolManager",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x29e40d4b"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "result",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8da5cb5b"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "pendingOwner",
                    "type": "address"
                }
            ],
            "name": "ownershipHandoverExpiresAt",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0xfee81cf4"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                }
            ],
            "name": "recoverFunds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x24ae6a27"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "registerRecipient",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x075c0e9c"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_strategy",
                    "type": "address"
                }
            ],
            "name": "removeFromCloneableStrategies",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x031e2fa1"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_manager",
                    "type": "address"
                }
            ],
            "name": "removePoolManager",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x7f5a70bd"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x715018a6"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x36568abe"
        },
        {
            "inputs": [],
            "name": "requestOwnershipHandover",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x25692962"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xd547741f"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x01ffc9a7"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "signature": "0xf2fde38b"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_baseFee",
                    "type": "uint256"
                }
            ],
            "name": "updateBaseFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x8e690186"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_feePercentage",
                    "type": "uint256"
                }
            ],
            "name": "updateFeePercentage",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x6cad3fb0"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "protocol",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "pointer",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Metadata",
                    "name": "_metadata",
                    "type": "tuple"
                }
            ],
            "name": "updatePoolMetadata",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x5f9ca138"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_registry",
                    "type": "address"
                }
            ],
            "name": "updateRegistry",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x1a5da6c8"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_treasury",
                    "type": "address"
                }
            ],
            "name": "updateTreasury",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x7f51bb1f"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "percentFee",
                    "type": "uint256"
                }
            ],
            "name": "PercentFeeUpdated",
            "type": "event",
            "signature": "0x9e826789de2de708fd9f09edea1182545e543893caa8ff71f8eb3aab50a4b065"
        },
        {
            "inputs": [],
            "name": "getFeeDenominator",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "FEE_DENOMINATOR",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function",
            "signature": "0xf4e1fc41"
        },
        {
            "inputs": [],
            "name": "getPercentFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "signature": "0x4edbaadc"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_registry",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "_treasury",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_percentFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_baseFee",
                    "type": "uint256"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xa6b63eb8"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_percentFee",
                    "type": "uint256"
                }
            ],
            "name": "updatePercentFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xf54fc4a0"
        }
    ]
}