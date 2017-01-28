var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('a1a0a2a3'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 35,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('e31f98f2a23aa2b96418e4a397c7b6ffddc98111db3a89902cc50ffa230d0000'),
    merkle_root: hex('6c338470a1d3ba824de0f5f08a9745212924c80d37e0dac0a30c29326ca69879'),
    height: 0,
    nonce: 303451,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1435945406,
    bits: 486604799
  },
  dnsSeeds: [
    '95.85.49.153',
	'95.85.60.40',
    '45.55.58.160',
    '159.203.85.176',
    '128.199.211.65',
    '128.199.242.30'
  ],
  defaultClientPort: 22714,
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('a1a0a2a3'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 35,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('e31f98f2a23aa2b96418e4a397c7b6ffddc98111db3a89902cc50ffa230d0000'),
    merkle_root: hex('6c338470a1d3ba824de0f5f08a9745212924c80d37e0dac0a30c29326ca69879'),
    height: 0,
    nonce: 303451,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1435945406,
    bits: 486604799
  },
  dnsSeeds: [
    '95.85.49.153',
	'95.85.60.40',
    '45.55.58.160',
    '159.203.85.176',
    '128.199.211.65',
    '128.199.242.30'
  ],
  defaultClientPort: 22714,
};
