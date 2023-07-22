// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

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

    console.log(`name: ${name} and organ: ${organ}`);
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
  const contractFactory = await hre.ethers.getContractFactory("Donation")
  const contract = await contractFactory.deploy()
  console.log("waiting for deployment");
  contract.waitForDeployment()
  console.log(`The address of contract is: ${contract.target}`);

  const [donor1, donor2, receiver1, receiver2, doctor1, doctor2] = await hre.ethers.getSigners()

  const tx = await contract.connect(donor1).setUser(donor1.address, "donor1", 1, 1, 0);
  // await contract.connect(donor2).setUser(donor2.address, "donor2", 2, 2, 0);
  // await contract.connect(receiver1).setUser(receiver1.address, "receiver1", 1, 1, 1);
  // await contract.connect(receiver1).setUser(receiver2.address, "receiver2", 2, 1, 1);
  // await contract.connect(doctor1).setDoctor(doctor1.address, "doctor1", "license")
  // await contract.connect(doctor1).setDoctor(doctor2.address, "doctor2", "license")
  console.log(tx.hash);
  // const donors = await contract.getDonors();
  // console.log("---------donors-----------");
  // console.log(donors);
  // logDonors(donors);

  // const receivers = await contract.getReceivers();
  // logReceivers(receivers);

  // const doctors = await contract.getDoctors();
  // logDoctors(doctors);
  // const donor = await contract.donors(0)
  // console.log();

  // const requiredDonor = [
  //   donors[1].account,
  //   donors[1].name,
  //   donors[1].received,
  //   donors[1].donated,
  //   donors[1].verified,
  //   donors[1].organ,
  //   donors[1].bloodGroup,
  //   donors[1].userType
  // ];

  // handle revert error in frontend 
  // for checking we can use chai
  // await contract.connect(doctor1).verify(requiredDonor)
  // const verifiedDonors = await contract.getVerifiedDoners();
  // console.log("verified Donors: ");
  // logDonors(verifiedDonors);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
