require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food struggle random stick minor coral light army genuine'; 
let testAccounts = [
"0x7725a09d83db6a75ff3c127749f8fa6f8f0e504fd0d0c1149953a3b9168843d7",
"0x5dcf00ca6c886dc0f3f9c8da710d0c355aaf7227957828ca2fac89ef3275a8d6",
"0x2c6a157b6d1b763bd35f17c1f9be99a4640a93b3e2185e8ea9eb2d5f6a25f9f1",
"0x7e54e681386b2d838819097556b677f15e1b920199c30ebee7199bb1cbbb5151",
"0x91bb0a9bad56e62f7582c738f22d79a6faa5e5a4d48affb0ebfbadfa8e3200bb",
"0xbc7b018354968c8e1d1346027c534aa8543de5e4b11fc9aa73eb49e161ba71e9",
"0x46e0ab3bc4bf794f08e818c6d5960546a6fe73644ca4c830a8eb5005e92e6ca5",
"0xef3f90ec0bb98d6cc72a1d86e3574f282cea9d6c31bbd3ea998914966acf182f",
"0x21b4312f97f784a2371e5dc33197ee40cf333d6791721575b4a211098a863078",
"0x7c49e835d57ca64be38bc19da2e323602094cb27523ce38e3a07b48d378e3e6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
