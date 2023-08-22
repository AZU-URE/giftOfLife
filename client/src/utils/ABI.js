const DonationAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "msg",
                "type": "string"
            }
        ],
        "name": "MatchFound",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "msg",
                "type": "string"
            }
        ],
        "name": "MatchNotFound",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "donor",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "msg",
                "type": "string"
            }
        ],
        "name": "OrganReceived",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "AllDonors",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "AllReceivers",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "doctors",
        "outputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "license",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User",
                "name": "_user",
                "type": "tuple"
            }
        ],
        "name": "donate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "donationDetails",
        "outputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "doner",
                "type": "address"
            },
            {
                "internalType": "enum Enums.Organ",
                "name": "organ",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "donations",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "donors",
        "outputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "received",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "donated",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "verified",
                "type": "bool"
            },
            {
                "internalType": "enum Enums.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.UserType",
                "name": "userType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "donorsVerified",
        "outputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "received",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "donated",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "verified",
                "type": "bool"
            },
            {
                "internalType": "enum Enums.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.UserType",
                "name": "userType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDoctors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "license",
                        "type": "string"
                    }
                ],
                "internalType": "struct Structs.Doctor[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDonationDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "doner",
                        "type": "address"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.Details[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDonors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMatchedProfiles",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "bool",
                                "name": "received",
                                "type": "bool"
                            },
                            {
                                "internalType": "bool",
                                "name": "donated",
                                "type": "bool"
                            },
                            {
                                "internalType": "bool",
                                "name": "verified",
                                "type": "bool"
                            },
                            {
                                "internalType": "enum Enums.Organ",
                                "name": "organ",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Enums.BloodGroup",
                                "name": "bloodGroup",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Enums.UserType",
                                "name": "userType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Structs.User",
                        "name": "donor",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "bool",
                                "name": "received",
                                "type": "bool"
                            },
                            {
                                "internalType": "bool",
                                "name": "donated",
                                "type": "bool"
                            },
                            {
                                "internalType": "bool",
                                "name": "verified",
                                "type": "bool"
                            },
                            {
                                "internalType": "enum Enums.Organ",
                                "name": "organ",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Enums.BloodGroup",
                                "name": "bloodGroup",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Enums.UserType",
                                "name": "userType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Structs.User",
                        "name": "receiver",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct Structs.Matched[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getReceivers",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVerifiedDoners",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVerifiedReceivers",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "matchedProfiles",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User",
                "name": "donor",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User",
                "name": "receiver",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User",
                "name": "_user",
                "type": "tuple"
            }
        ],
        "name": "pair",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "receivers",
        "outputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "received",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "donated",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "verified",
                "type": "bool"
            },
            {
                "internalType": "enum Enums.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.UserType",
                "name": "userType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "receiversVerified",
        "outputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "received",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "donated",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "verified",
                "type": "bool"
            },
            {
                "internalType": "enum Enums.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.UserType",
                "name": "userType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_license",
                "type": "string"
            }
        ],
        "name": "setDoctor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "enum Enums.Organ",
                "name": "_organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.BloodGroup",
                "name": "_bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Enums.UserType",
                "name": "_userType",
                "type": "uint8"
            }
        ],
        "name": "setUser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "received",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "donated",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    },
                    {
                        "internalType": "enum Enums.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Enums.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Structs.User",
                "name": "_user",
                "type": "tuple"
            }
        ],
        "name": "verify",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "whoVerified",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export { DonationAbi } 