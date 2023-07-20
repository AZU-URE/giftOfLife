const hre = require("hardhat")

async function main() {
    const contractFactory = await hre.ethers.getContractFactory("Donation")
    const contract = await contractFactory.deploy()
    console.log("waiting for deployment");
    contract.waitForDeployment()
    console.log(`The address of contract is: ${contract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
