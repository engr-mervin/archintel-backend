import { TRANSACTION_QUERY_LIMIT } from "@/constants/transactionConstants";
import { Alchemy, AssetTransfersCategory, AssetTransfersWithMetadataResponse, AssetTransfersWithMetadataResult, Network } from "alchemy-sdk";
import { ENV } from "config";

const config = {
  apiKey: ENV.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

// Function to fetch transactions with pagination
async function fetchTransactions(address: string, lastBlockQueried: number, toAddress: string | undefined, fromAddress: string | undefined) {
  let transactions: AssetTransfersWithMetadataResult[] = [];
  let pageKey: string | undefined = undefined;

  do {
    const data: AssetTransfersWithMetadataResponse = await alchemy.core.getAssetTransfers({
      fromBlock: `0x${(lastBlockQueried + 1).toString(16)}`, // Start from the next block
      toAddress,
      fromAddress,
      withMetadata: true,
      category: [AssetTransfersCategory.INTERNAL, AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.ERC20],
      pageKey,
      maxCount: TRANSACTION_QUERY_LIMIT,
    });

    transactions.push(...data.transfers);
    pageKey = data.pageKey;
  } while (TRANSACTION_QUERY_LIMIT && pageKey && transactions.length < TRANSACTION_QUERY_LIMIT);

  return transactions;
}

export async function getNonNFTOutgoingTransactions(address: string, lastBlockQueriedOutgoing: number) {
  return fetchTransactions(address, lastBlockQueriedOutgoing, undefined, address);
}

export async function getNonNFTIncomingTransactions(address: string, lastBlockQueriedIncoming: number) {
  return fetchTransactions(address, lastBlockQueriedIncoming, address, undefined);
}
