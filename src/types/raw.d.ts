declare interface IRawBlock {
  baseFeePerGas?: string; // this property will not be here for legacy blocks (prior to London hardfork)
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactions: string[] | RawTransactions;
  transactionsRoot: string;
  uncles: string[];
}

declare type RawTransaction = Raw1559Transaction | RawLegacyTransaction;

declare type RawTransactions = (Raw1559Transaction | RawLegacyTransaction)[];

declare interface RawLegacyTransaction {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  r: string;
  s: string;
  v: string;
  to: string;
  transactionIndex: string;
  type: string;
  value: string;
}

declare interface Raw1559Transaction {
  accessList: string[]; // new field (EIP-155)
  blockHash: string;
  blockNumber: string;
  chainId: string; // new field (EIP-155)
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  maxFeePerGas: string; // new field (EIP-1559)
  maxPriorityFeePerGas: string; // new field (EIP-1559)
  nonce: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
}

/* Tuple to RLP encode (if before block 12965000)  */
declare type ILegacyBlockTuple = [
  parentHash: string,
  sha3Uncles: string,
  miner: string,
  stateRoot: string,
  transactionsRoot: string,
  receiptsRoot: string,
  logsBloom: string,
  difficulty: string,
  number: string,
  gasLimit: string,
  gasUsed: string,
  time: string,
  extraData: string,
  mixHash: string,
  nonce: string
];

/* Tuple to RLP encode (if after block 12965000)  */
declare type IPost1559Tuple = [
  parentHash: string,
  sha3Uncles: string,
  miner: string,
  stateRoot: string,
  transactionsRoot: string,
  receiptsRoot: string,
  logsBloom: string,
  difficulty: string,
  number: string,
  gasLimit: string,
  gasUsed: string,
  time: string,
  extraData: string,
  mixHash: string,
  nonce: string,
  baseFeePerGas: string
];
