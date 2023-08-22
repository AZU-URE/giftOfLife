// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// const extractContentInSingleQuotes = require('../../src/utils/messageInsideQuotes')

function logDonors(donors) {
  // console.log('reched in donors');
  // console.log(donors);
  for (const donor of donors) {
    const name = donor.name;
    const organ = donor.organ;

    console.log(`name: ${name} and organ: ${organ}`);
  }
}

function logReceivers(receivers) {
  for (const receiver of receivers) {
    const name = receiver.name;
    const organ = receiver.organ;
    const bg = receiver.bloodGroup;

    console.log(`name: ${name} and organ: ${organ} and bg: ${bg}`);
  }
}

function logDoctors(doctors) {
  for (const doctor of doctors) {
    const name = doctor.name;
    const license = doctor.license;

    console.log(`name: ${name} and license: ${license}`);
  }
}



async function main() {

  const contractFactoryFirst = await hre.ethers.getContractFactory("Enums")
  const contractFirst = await contractFactoryFirst.deploy()
  console.log("waiting for deployment");
  contractFirst.waitForDeployment()
  console.log(`The address of contract Definitions is: ${contractFirst.target}`);

  const contractFactoryStruct = await hre.ethers.getContractFactory("Structs")
  const contractStruct = await contractFactoryStruct.deploy()
  console.log("waiting for deployment");
  contractFirst.waitForDeployment()
  console.log(`The address of contract Definitions is: ${contractStruct.target}`);

  const contractFactory = await hre.ethers.getContractFactory("DonationCompact")
  const contract = await contractFactory.deploy()
  console.log("waiting for deployment");
  contract.waitForDeployment()
  console.log(`The address of contract is: ${contract.target}`);

  // contract.on("MatchFound", (msg1) => {
  //   console.log(msg1);
  // })
  const [donor1, donor2, receiver1, receiver2, doctor1, doctor2] = await hre.ethers.getSigners()

  // const donor = await contract.getDonors()
  // console.log(donor);

  await contract.connect(donor1).setUser(donor1.address, "donor1", 1, 1, 0);
  await contract.connect(donor2).setUser(donor2.address, "donor2", 2, 1, 0);
  await contract.connect(receiver1).setUser(receiver1.address, "receiver1", 1, 1, 1)
  await contract.connect(receiver2).setUser(receiver2.address, "receiver2", 1, 1, 1)

  // try {
  //   const tx = await contract.connect(donor2).setUser(donor1.address, "donor2", 1, 1, 0)
  //   const receipt = await tx.wait();
  //   console.log('Transaction successful:');
  // } catch (error) {
  // Transaction failed, handle the revert error
  // if (error.message.includes("revert")) {
  //   const revertReason = error.message.replace("revert ", "");
  //   const regex = /'([^']*)'/;
  //   const matches = revertReason.match(regex);
  //   if (matches && matches.length >= 2) {
  //     console.log(matches[matches.length - 1]);
  //   } else {
  //     console.log("error"); // No content in single quotes found

  // revertReason = extractContentInSingleQuotes(revertReason)
  //     console.log('Revert reason:', revertReason);
  //   } else {
  //     // Handle other errors
  //     console.error('Error:', error);
  //     }
  //   }
  // } 
  // finally {
  // await contract.connect(doctor1).setDoctor(doctor1.address, "doctor1", "license")
  const donors = await contract.getDonors();
  const receivers = await contract.getReceivers();
  // logDonors(donors);




  // await contract.connect(receiver1).setUser(receiver1.address, "receiver1", 1, 1, 1);
  // await contract.connect(receiver1).setUser(receiver2.address, "receiver2", 2, 1, 1);
  await contract.connect(doctor2).setDoctor(doctor2.address, "doctor2", "license")
  // console.log(tx.hash);
  console.log("---------donors-----------");
  // console.log(donors);
  logDonors(donors);
  console.log("chekcing whether verified", donors[0].verified);

  console.log("---------receivers-----------");
  // console.log(donors);
  logDonors(receivers);

  // const receivers = await contract.getReceivers();
  // logReceivers(receivers);

  const doctors = await contract.getDoctors();
  console.log("---------doctors-----------");
  logDoctors(doctors);
  // const donor = await contract.donors(0)
  // console.log();

  const requiredDonor = [
    donors[0].account,
    donors[0].name,
    donors[0].received,
    donors[0].donated,
    donors[0].verified,
    donors[0].organ,
    donors[0].bloodGroup,
    donors[0].userType
  ];

  // handle revert error in frontend 
  // for checking we can use chai
  await contract.connect(doctor2).verify(requiredDonor)
  const verifiedDonors = await contract.getVerifiedDoners();
  console.log("verified Donors: ");
  logDonors(verifiedDonors);
  console.log(verifiedDonors[0].verified);

  const requiredReceiver = [
    receivers[0].account,
    receivers[0].name,
    receivers[0].received,
    receivers[0].donated,
    receivers[0].verified,
    receivers[0].organ,
    receivers[0].bloodGroup,
    receivers[0].userType
  ]

  const requiredReceiver2 = [
    receivers[1].account,
    receivers[1].name,
    receivers[1].received,
    receivers[1].donated,
    receivers[1].verified,
    receivers[1].organ,
    receivers[1].bloodGroup,
    receivers[1].userType
  ]

  await contract.connect(doctor2).verify(requiredReceiver)
  await contract.connect(doctor2).verify(requiredReceiver2)
  const verifiedReceivers = await contract.getVerifiedReceivers();
  console.log("verified Receivers: ");
  logReceivers(verifiedReceivers);
  // console.log(receivers[0].verified);



  // const verifiedReceiver = [
  //   verifiedReceivers[0].account,
  //   verifiedReceivers[0].name,
  //   verifiedReceivers[0].received,
  //   verifiedReceivers[0].donated,
  //   verifiedReceivers[0].verified,
  //   verifiedReceivers[0].organ,
  //   verifiedReceivers[0].bloodGroup,
  //   verifiedReceivers[0].userType
  // ]

  const tempDonor = [
    verifiedDonors[0].account,
    verifiedDonors[0].name,
    verifiedDonors[0].received,
    verifiedDonors[0].donated,
    verifiedDonors[0].verified,
    verifiedDonors[0].organ,
    verifiedDonors[0].bloodGroup,
    verifiedDonors[0].userType
  ];

  // await contract.pair(tempDonor);
  // await contract.pair(tempDonor);
  // await contract.pair(tempDonor);
  // console.log(profiles);
  const first = await contract.donate(tempDonor);
  const second = await contract.donate(tempDonor);
  // const third = await contract.donate(tempDonor);

  const donations = await contract.getDonationDetails();
  console.log(donations);
  // console.log("first:", first);
  // console.log("second:", second);

  // await contract.pair(tempDonor);
  // contract.off()
  // console.log(matchedProfiles.length);
  // console.log("---------doctor-----------");
  // console.log(donors[0].account);

  // console.log("registering again");
  // await contract.connect(donor1).setUser(donor1.address, "donor1", 1, 1, 0);
  // const doc = await contract.whoVerified("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")
  // console.log(doc);
  // const NonVerifieddonors = await contract.getDonors();
  // console.log(donors);
  // logDonors(NonVerifieddonors);

  //match profiles--------------------------------------
  // Calling the getDonors function to fetch all donors


}

// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
