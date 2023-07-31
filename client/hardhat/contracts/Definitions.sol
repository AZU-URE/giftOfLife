// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

// -------------definitions-------------

contract Definitions {
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
    // info of the receiver -patient
    struct User {
        address account;
        string name;
        bool received;
        bool donated;
        bool verified;
        Organ organ;
        BloodGroup bloodGroup;
        UserType userType;
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

    User[] public receivers;
    User[] public donors;
    Doctor[] public doctors;
    mapping(address => address) public whoVerified; // mapping od user => doctor , tells that the user is verified by whome
    mapping(address => address) public donations; // receiver=>donor
    User[] public receiversVerified;
    User[] public donersVerified;
    Matched[] public matchedProfiles;

    // -----------------events-------------------

    event MatchFound(Matched indexed _matched, string indexed msg);
    event MatchNotFound(string indexed msg);
    event OrganReceived(
        address indexed donor,
        address indexed receiver,
        string msg
    );

    // -------------------Modifier------------------
    modifier Onlydoctor() {
        bool doctorExists = false;
        for (uint i = 0; i < doctors.length; i++) {
            if (doctors[i].account == msg.sender) {
                doctorExists = true;
                break;
            }
        }
        require(doctorExists, "You are not a doctor");
        _;
    }

    // ------------------Funtions-----------------
    function verify(User memory _user) public Onlydoctor {
        _user.verified = true;
        whoVerified[_user.account] = msg.sender;
        if (_user.userType == UserType.Donor) {
            donersVerified.push(_user);
            for (uint i = 0; i < donors.length; i++) {
                if (donors[i].account == _user.account) {
                    donors[i] = donors[donors.length - 1];
                    donors.pop();
                }
            }
        } else {
            receiversVerified.push(_user);
            for (uint i = 0; i < receivers.length; i++) {
                if (receivers[i].account == _user.account) {
                    receivers[i] = receivers[receivers.length - 1];
                    receivers.pop();
                }
            }
        }
    }
}
