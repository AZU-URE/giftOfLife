// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Donation{
    // -------------definitions-------------

// defining organ types
    enum Organ {liver,eye,kidney,lung,pacreas}
// defining bloodgroups
    enum BloodGroup {Apos,Aneg,Bpos,Bneg,Opos,Oneg,ABpos,ABneg}
// info of the receiver -patient
    struct Receiver{
        address account;
        string name;
        bool received;
        bool verified;
        Organ organ;
        BloodGroup bloodGroup;
        // address[] nftAddress;
    }
    
// info of doner - giver
    struct Doner{
        address account;
        string name;
        bool donated;
        bool verified;
        Organ organ;
        BloodGroup bloodGroup;
        // address[] nftAddress;
    }

// doctor's info 
    struct Doctor{
        address account;
        string name;
        string license;
    }
// The delivery person's info
// {receiver,doner,delivered} will be reset after successful delivery
    struct Delivery{
        address account;
        string name;
        Doner doner;
        Receiver receiver;
        bool delivered;
    }
Receiver[] receivers;
Doner[] doners;
Doctor[] doctors;
mapping(address => address) donations;
mapping(address =>Receiver[]) receiversVerified;
mapping(address =>Doner[]) donersVerified;


// -----------------functions-----------------

// _organ must be [0,4]
// _bloodGroup must be [0,7]

    function setReceiver(address _account,string memory _name,Organ _organ,BloodGroup _bloodGroup) public returns (bool){
        Receiver memory receiver = Receiver(_account,_name,false,false,_organ,_bloodGroup);
        receivers.push(receiver);
        return true;
    }

    function setDoner(address _account,string memory _name,Organ _organ,BloodGroup _bloodGroup) public returns (bool){
        Doner memory doner = Doner(_account,_name,false,false,_organ,_bloodGroup);
        doners.push(doner);
        return true;
    }

    function setDoctor(address _account,string memory _name,string memory _license) public returns (bool){
        Doctor memory doctor = Doctor(_account,_name,_license);
        doctors.push(doctor);
        return true;
    }
     

    
}