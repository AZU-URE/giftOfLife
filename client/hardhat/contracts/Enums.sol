// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Enums {
    // defining organ types
    enum Organ {
        liver,
        eye,
        kidney,
        lung,
        pacreas
    }
    // defining bloodgroups
    enum BloodGroup {
        Apos,
        Aneg,
        Bpos,
        Bneg,
        Opos,
        Oneg,
        ABpos,
        ABneg
    }

    // doner or receiver

    enum UserType {
        Donor,
        Receiver
    }
}
