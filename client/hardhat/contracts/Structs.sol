// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./Enums.sol";
contract Structs
{
// info of the receiver -patient
    struct User {
        address account;
        string name;
        bool received;
        bool donated;
        bool verified;
        Enums.Organ organ;
        Enums.BloodGroup bloodGroup;
        Enums.UserType userType;
        // address[] nftAddress;
    }

    // doctor's info
    struct Doctor {
        address account;
        string name;
        string license;
    }

    struct Matched {
        User donor;
        User receiver;
    }
}
