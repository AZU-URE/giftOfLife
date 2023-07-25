const DonationAbi = [
    {
        "anonymous": false,
        "inputs": [
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
                                "internalType": "enum Donation.Organ",
                                "name": "organ",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.BloodGroup",
                                "name": "bloodGroup",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.UserType",
                                "name": "userType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Donation.User",
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
                                "internalType": "enum Donation.Organ",
                                "name": "organ",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.BloodGroup",
                                "name": "bloodGroup",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.UserType",
                                "name": "userType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Donation.User",
                        "name": "receiver",
                        "type": "tuple"
                    }
                ],
                "indexed": true,
                "internalType": "struct Donation.Matched",
                "name": "_matched",
                "type": "tuple"
            },
            {
                "indexed": true,
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
                "indexed": true,
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User",
                "name": "_user",
                "type": "tuple"
            }
        ],
        "name": "donate",
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
        "name": "donersVerified",
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
                "internalType": "enum Donation.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.UserType",
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
                "internalType": "enum Donation.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.UserType",
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
                "internalType": "struct Donation.Doctor[]",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User[]",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User",
                "name": "_user",
                "type": "tuple"
            }
        ],
        "name": "getMatchProfile",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
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
                                "internalType": "enum Donation.Organ",
                                "name": "organ",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.BloodGroup",
                                "name": "bloodGroup",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.UserType",
                                "name": "userType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Donation.User",
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
                                "internalType": "enum Donation.Organ",
                                "name": "organ",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.BloodGroup",
                                "name": "bloodGroup",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum Donation.UserType",
                                "name": "userType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Donation.User",
                        "name": "receiver",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct Donation.Matched[]",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User[]",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User[]",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User[]",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User",
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
                "internalType": "enum Donation.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.UserType",
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
                "internalType": "enum Donation.Organ",
                "name": "organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.BloodGroup",
                "name": "bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.UserType",
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
                "internalType": "enum Donation.Organ",
                "name": "_organ",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.BloodGroup",
                "name": "_bloodGroup",
                "type": "uint8"
            },
            {
                "internalType": "enum Donation.UserType",
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
                        "internalType": "enum Donation.Organ",
                        "name": "organ",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.BloodGroup",
                        "name": "bloodGroup",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Donation.UserType",
                        "name": "userType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct Donation.User",
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