const MerkleTools = require('merkle-tools');

// 创建 MerkleTools 实例
const merkleTools = new MerkleTools();

// 白名单地址
const addresses = [
    '6E361Bd7eab67bcf10b86235E59f399c190111Cd', 
    'E4db33202eD427beC165BAcCA23c8686d37118Fc',
    'Ed2A421e01f349583D9aE0f394B9D03275ECDB11'
]

// 将地址添加进 merkle tree 叶子节点
merkleTools.addLeaves(addresses);

// 生成 merkle tree
merkleTools.makeTree();

// 获取 merkle root
const root = merkleTools.getMerkleRoot();
console.log(root);
console.log(root.toString('hex'));
console.log('-------------')

// 获取 merkle proof
const proof0 = merkleTools.getProof(0);
const proof1 = merkleTools.getProof(1);
const proof2 = merkleTools.getProof(2);
console.log(proof0);
console.log(proof1);
console.log(proof2);

// 验证
const isValid0 = merkleTools.validateProof(proof0, addresses[0], root);
console.log(isValid0);
const isValid1 = merkleTools.validateProof(proof1, addresses[1], root);
console.log(isValid1);
const isValid2 = merkleTools.validateProof(proof2, addresses[2], root);
console.log(isValid2);