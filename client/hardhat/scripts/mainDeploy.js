const hre = require("hardhat")

async function main() {

    const contractFactoryStruct = await hre.ethers.getContractFactory("Structs")
    const contractStruct = await contractFactoryStruct.deploy()
    console.log("waiting for deployment");
    contractStruct.waitForDeployment()
    console.log(`The address of contract is: ${contractStruct.target}`);

    const contractFactoryEnum = await hre.ethers.getContractFactory("Enums")
    const contractEnum = await contractFactoryEnum.deploy()
    console.log("waiting for deployment");
    contractEnum.waitForDeployment()
    console.log(`The address of contract is: ${contractEnum.target}`);


    const contractFactory = await hre.ethers.getContractFactory("DonationCompact")
    const contract = await contractFactory.deploy()
    console.log("waiting for deployment");
    contract.waitForDeployment()
    console.log(`The address of contract is: ${contract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
