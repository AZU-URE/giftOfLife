// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./Enums.sol";
import "./Structs.sol";

contract DonationCompact is Enums, Structs 
{
    User[] public receivers;
    User[] public donors;
    Doctor[] public doctors;

    //tells the user is verified by whom, user=>doctor
    mapping(address => address) public whoVerified;

    //receiver=>donor
    mapping(address => address) public donations;

    User[] public receiversVerified;
    User[] public donorsVerified;
    Matched[] public matchedProfiles;

    //------------ MODIFIERS ------------

    modifier Onlydoctor() 
    {
        //check is any doctor exists in the 'doctor' array
        bool doctorExists = false;
        for (uint i = 0; i < doctors.length; i++) 
        {
            if (doctors[i].account == msg.sender) 
            {
                doctorExists = true;
                break;
            }
        }
        require(doctorExists, "You are not a doctor");
        _;
    }

    modifier onlyVerfied(User memory _user) 
    {
        //only verified user, test if '_user.verified == true'
        require(_user.verified, "You are not yet verified");
        _;
    }

    modifier registerOnce(address _account, UserType _userType) 
    {

        //instead of running 2 loops, each for donors and receivers
        //make an array to store each type in one go

        //the loop then runs only once on this compact array and checks accordingly
        
        User[] storage users = (_userType == UserType.Donor) ? donors : receivers;
        for (uint i = 0; i < users.length; i++) {
            require(users[i].account != _account, "You have already registered");
        }
        _;
    }

    //----------- EVENTS -------------

    event MatchFound(Matched indexed _matched, string indexed msg);
    event MatchNotFound(string indexed msg);
    event OrganReceived(address indexed donor, address indexed receiver, string msg);

    //----------- FUNCTIONS ----------

    function setUser(
        address _account,
        string memory _name,
        Organ _organ,
        BloodGroup _bloodGroup,
        UserType _userType
    ) public registerOnce(_account, _userType) returns (bool) 
    {
        User memory user = User(_account, _name, false, false, false, _organ, _bloodGroup, _userType);

        //just used ternary operators to shorten it
        (_userType == UserType.Donor) ? donors.push(user) : receivers.push(user);
        return true;
    }

    function setDoctor(
        address _account,
        string memory _name,
        string memory _license
    ) public returns (bool) 
    {
        // avoided creation of another variable to store the 'Doctor' object
        // apparently it makes a difference of 0.28kb according to 'ethereum.org'. LOL
        doctors.push(Doctor(_account, _name, _license));
        return true;
    }

    function getDonors() external view returns (User[] memory) {
        return donors;
    }

    function getReceivers() external view returns (User[] memory) {
        return receivers;
    }

    function getDoctors() external view returns (Doctor[] memory) {
        return doctors;
    }

    function getVerifiedReceivers() external view returns (User[] memory) {
        return receiversVerified;
    }

    function getVerifiedDoners() external view returns (User[] memory) {
        return donorsVerified;
    }

    function getMatchedProfiles() external view returns (Matched[] memory) {
        return matchedProfiles;
    }

function verify(User memory _user) public Onlydoctor 
    {
        _user.verified = true;
        whoVerified[_user.account] = msg.sender;

        if (_user.userType == UserType.Donor) 
        {
            pushAndDelete(donorsVerified, donors, _user);
        } 
        else 
        {
            pushAndDelete(receiversVerified, receivers, _user);
        }
    }

    function pushAndDelete(User[] storage verifiedArray, User[] storage usersArray, User memory user) internal 
    {
        // the pushing user to the verified array and popping the user from original 'donors' and 'receivers' array is a common functionality
        // so made it into a separate function
        verifiedArray.push(user);
        for (uint i = 0; i < usersArray.length; i++) 
        {
            if (usersArray[i].account == user.account) 
            {
                usersArray[i] = usersArray[usersArray.length - 1];
                usersArray.pop();
                break;
            }
        }
    }

    function pair(User memory _user) public onlyVerfied(_user) 
    {
        bool matchFound = false;
        User[] storage verifiedUsers = (_user.userType == UserType.Donor) ? receiversVerified : donorsVerified;

        for (uint i = 0; i < verifiedUsers.length; i++) 
        {
            if (verifiedUsers[i].organ == _user.organ && verifiedUsers[i].bloodGroup == _user.bloodGroup) 
            {
                //again reduced a variable declaration 'matched'
                matchedProfiles.push(Matched(_user, verifiedUsers[i]));
                emit MatchFound(Matched(_user, verifiedUsers[i]), "Match found");
                matchFound = true;
            }
        }

        if (!matchFound) 
        {
            emit MatchNotFound("Match not found");
        }
    }

    function getMatchProfile(User memory _user) public onlyVerfied(_user) returns (User[] memory) 
    {
        pair(_user);
        User[] memory _profiles = new User[](matchedProfiles.length);

        for (uint i = 0; i < matchedProfiles.length; i++) {
            if (_user.account == matchedProfiles[i].donor.account) {
                _profiles[i] = matchedProfiles[i].receiver;
            } else {
                _profiles[i] = matchedProfiles[i].donor;
            }
        }

        return _profiles;
    }

    function donate(User memory _user) public onlyVerfied(_user) returns (bool) 
    {
        require(!_user.received, "Already received, let us give chance to others");
        address donor = msg.sender;
        address receiver = _user.account;
        bool matchVerified = false;

        for (uint i = 0; i < matchedProfiles.length; i++) 
        {
            if (matchedProfiles[i].donor.account == donor && matchedProfiles[i].receiver.account == receiver) 
            {
                matchVerified = true;
                matchedProfiles[i].donor.donated = true;
                matchedProfiles[i].receiver.received = true;
                emit OrganReceived(donor, receiver, "Received");
                break;
            }
        }

        if (matchVerified) 
        {
            donations[receiver] = donor;
            return true;
        } 
        else 
        {
            return false;
        }
    }
}
