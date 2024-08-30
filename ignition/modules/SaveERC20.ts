import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x35848e5d5bB18eb5470Cacc81915180b97FD872c";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;


// Web3CXIModule#Web3CXI - 0x35848e5d5bB18eb5470Cacc81915180b97FD872c
// SaveERC20Module#SaveERC20 - 0x21D2Bb19Cf3f5445aAE5A41f1A744dC6A6333BdC