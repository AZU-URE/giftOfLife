// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./Definitions.sol";

contract Donation is Definitions {
    // -----------------modifier-----------------

    Definitions public definitionRef;

    // constructor(Definitions _addrDefinitions) {
    //     definitionRef = _addrDefinitions;
    // }

    modifier onlyVerfied(User memory _user) {
        require(_user.verified == true, "You are not yet verified");
        _;
    }

    modifier registerOnce(address _account, UserType _userType) {
        bool registered = false;
        if (_userType == UserType.Donor) {
            for (uint i = 0; i < donors.length; i++) {
                if (donors[i].account == _account) {
                    registered = true;
                    break;
                }
            }
        } else {
            for (uint i = 0; i < receivers.length; i++) {
                if (receivers[i].account == _account) {
                    registered = true;
                    break;
                }
            }
        }

        require(!registered, "You have already registered");
        _;
    }

    // -----------------functions-----------------

    // --------------setter functions---------------

    function setUser(
        address _account,
        string memory _name,
        Organ _organ,
        BloodGroup _bloodGroup,
        UserType _userType
    ) public registerOnce(_account, _userType) returns (bool) {
        User memory user = User(
            _account,
            _name,
            false,
            false,
            false,
            _organ,
            _bloodGroup,
            _userType
        );
        if (_userType == UserType.Donor) {
            donors.push(user);
        } else {
            receivers.push(user);
        }
        return true;
    }

    function setDoctor(
        address _account,
        string memory _name,
        string memory _license
    ) public returns (bool) {
        Doctor memory doctor = Doctor(_account, _name, _license);
        doctors.push(doctor);
        return true;
    }

    // --------------getter functions---------------

    function getDonors() external view returns (User[] memory) {
        return donors;
    }

    function getReceivers() public view returns (User[] memory) {
        return receivers;
    }

    function getDoctors() public view returns (Doctor[] memory) {
        return doctors;
    }

    function getVerifiedReceivers() public view returns (User[] memory) {
        return receiversVerified;
    }

    function getVerifiedDoners() public view returns (User[] memory) {
        return donersVerified;
    }

    function getMatchedProfiles() public view returns (Matched[] memory) {
        return matchedProfiles;
    }

    // ----------- functionalities------------------

    // will show matches for whatever user calls the function : for only verified
    function pair(User memory _user) private onlyVerfied(_user) {
        bool matchFound = false;
        if (_user.userType == UserType.Donor) {
            // if user is a donor needs to check for receiver
            for (uint i = 0; i < receiversVerified.length; i++) {
                if (receiversVerified[i].organ == _user.organ) {
                    if (receiversVerified[i].bloodGroup == _user.bloodGroup) {
                        Matched memory matched = Matched(
                            _user,
                            receiversVerified[i]
                        );
                        matchedProfiles.push(matched);
                        emit MatchFound(matched, "Match found");
                        matchFound = true;
                    }
                }
            }

            if (!matchFound) {
                emit MatchNotFound("Match not found");
            }
        } else {
            // if user is a receiver needs to check for doner
            for (uint i = 0; i < donersVerified.length; i++) {
                if (donersVerified[i].organ == _user.organ) {
                    if (donersVerified[i].bloodGroup == _user.bloodGroup) {
                        Matched memory matched = Matched(
                            donersVerified[i],
                            _user
                        );
                        matchedProfiles.push(matched);
                        emit MatchFound(matched, "Match found");
                        matchFound = true;
                    }
                }
            }

            if (!matchFound) {
                emit MatchNotFound("Match not found");
            }
        }
    }

    // function to obtain array of matched profiles for particular user

    function getMatchProfile(
        User memory _user
    ) public onlyVerfied(_user) returns (User[] memory) {
        User[] memory _profiles;
        pair(_user);

        if (_user.userType == UserType.Donor) {
            // user is doner
            for (uint i = 0; i < matchedProfiles.length; i++) {
                if (_user.account == matchedProfiles[i].donor.account) {
                    _profiles[_profiles.length] = matchedProfiles[i].receiver;
                }
            }
        } else {
            // user is receiver
            for (uint i = 0; i < matchedProfiles.length; i++) {
                if (_user.account == matchedProfiles[i].receiver.account) {
                    _profiles[_profiles.length] = matchedProfiles[i].donor;
                }
            }
        }

        return _profiles;
    }

    // donate
    function donate(
        User memory _user
    ) public onlyVerfied(_user) returns (bool) {
        require(
            _user.received != true,
            "Already received, let us give chnc to others"
        );

        address donor = msg.sender;
        address receiver = _user.account;
        bool matchVerified = false;

        for (uint i = 0; i < matchedProfiles.length; i++) {
            if (
                matchedProfiles[i].donor.account == donor &&
                matchedProfiles[i].receiver.account == receiver
            ) {
                matchVerified = true;
                matchedProfiles[i].donor.donated = true;
                matchedProfiles[i].receiver.received = true;
                emit OrganReceived(donor, receiver, "Received");
                break;
            }
        }

        if (matchVerified) {
            donations[receiver] = donor;
            return true;
        } else {
            return false;
        }
    }
}
