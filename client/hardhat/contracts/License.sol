// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DoctorLicenseVerification {
    address public owner;
    mapping(address => bool) public verifiers;
    mapping(address => bool) public verifiedDoctors;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can access this function.");
        _;
    }

    modifier onlyVerifier() {
        require(verifiers[msg.sender], "Only verifiers can access this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addVerifier(address _verifierAddress) external onlyOwner {
        verifiers[_verifierAddress] = true;
    }

    function removeVerifier(address _verifierAddress) external onlyOwner {
        verifiers[_verifierAddress] = false;
    }

    function verifyDoctorLicense(address _doctorAddress, bool _validLicense) external onlyVerifier {
        require(_doctorAddress != address(0), "Invalid doctor address.");

        if (_validLicense) {
            verifiedDoctors[_doctorAddress] = true;
        } else {
            verifiedDoctors[_doctorAddress] = false;
        }
    }

    function isDoctorVerified(address _doctorAddress) external view returns (bool) {
        return verifiedDoctors[_doctorAddress];
    }
}
