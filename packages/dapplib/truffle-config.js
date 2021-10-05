require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe student razor noble slow hover praise army genuine'; 
let testAccounts = [
"0x4fea2e20a167a9ed9d62972ec19a841cc2c6a6ee57a3b4880f478b38932033f1",
"0x410ff203384a5f8ecfb35d0189a1f81bc8bb97684b99ec916c6000e7e359d1b6",
"0x3c56b208c1939ad2cd4fb07639e23641be6e7049d7681df1fe219e94416306e4",
"0xa5fc804f26a5ebe4b9642c0c60bb6bd381ed9fef7187e6c7e5fe2824f362e0c4",
"0x2939af9e3771863970aad426497f00487f2ba8c055c3ffaa6adf1faedfc2cc99",
"0x4fbb94fb453eba58206cc4d4318671655f7db6537b883ce8b7216c4113010cac",
"0x718d786fdbad4c1eb5c389d14cc8a494ee8e8fe75e13c8bc6f1d1397eef56d69",
"0xa752703b2affb6370beaac2349ff769c4617fe973614e126e1513cfd84637c79",
"0xc39b3cc1810ec401bda993ccde143f082f22868bd0b2ecd632ecb3f5c6bc90a7",
"0x527948aeac216f754a46194ef8fd421bc2df516bf8eade7a84f60c9ff1b3d223"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


