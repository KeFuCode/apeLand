const { MerkleTree } = require('merkletreejs');
const { keccak256 } = require('ethers/lib/utils');

// 白名单地址
const addresses = [
    '0x6E361Bd7eab67bcf10b86235E59f399c190111Cd',
    '0xE4db33202eD427beC165BAcCA23c8686d37118Fc',
    '0xEd2A421e01f349583D9aE0f394B9D03275ECDB11',
    '0x10a6D5234d5d026df132C31239F462Be82589EA8' // 叶
]

// 叶子节点
const leaves = addresses.map(x => keccak256(x));
// merkle tree
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
// merkle root
const root = tree.getHexRoot();
console.log('root: ', root);
// 0xEd2A421e01f349583D9aE0f394B9D03275ECDB11 对应的 keccak256 加密
const leaf = keccak256('0x10a6D5234d5d026df132C31239F462Be82589EA8');
console.log('leaf: ', leaf);
// merkle proof
// const proof = tree.getProof(leaf);
const proof = tree.getHexProof(leaf);
console.log('proof: ', proof);
// verify
const isTrue = tree.verify(proof, leaf, root);
console.log(isTrue); // true

buffer1 = 'f91e5cebd8c4bdc2e070944e71c958064b425aafa453746d902e29eb08a5bf3a'
buffer2 = '88a443d2e10562ddda830f5dd1903f6a6e9fa41ea484780fea2edd34f6a13f95'