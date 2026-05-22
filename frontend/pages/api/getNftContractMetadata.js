// Import necessary packages
import { Network, Alchemy } from "alchemy-sdk";

const EVM_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

function parseRequestBody(req) {
  try {
    return typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch (_error) {
    return null;
  }
}

// Define asynchronous function handler
export default async function handler(req, res) {
  // Check if request is a POST request, if not return an error message
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = parseRequestBody(req);
  if (!body) {
    res.status(400).json({ message: "Invalid JSON body" });
    return;
  }

  const { address, chain = "ETH_SEPOLIA" } = body;
  if (!EVM_ADDRESS_REGEX.test(address || "")) {
    res.status(400).json({ message: "Invalid contract address" });
    return;
  }

  const normalizedChain = typeof chain === "string" ? chain.trim().toUpperCase() : "ETH_SEPOLIA";
  const network = Object.prototype.hasOwnProperty.call(Network, normalizedChain) ? Network[normalizedChain] : null;
  if (!network) {
    res.status(400).json({ message: "Unsupported chain" });
    return;
  }

  // Set settings using environment variable and chain information
  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network,
  };

  // Create instance of Alchemy SDK with the settings
  const alchemy = new Alchemy(settings);

  try {
    // Retrieve metadata for the specified NFT contract address
    const contractMetadata = await alchemy.nft.getContractMetadata(address);
    // If metadata exists, return JSON object with relevant data
    if (contractMetadata && contractMetadata.openSea) {
      res.status(200).json({
        name: contractMetadata.openSea.collectionName,
        symbol: contractMetadata.symbol,
        floorPrice: contractMetadata.openSea.floorPrice,
        description: contractMetadata.openSea.description,
        twitter_username: contractMetadata.openSea.twitterUsername,
        discord_url: contractMetadata.openSea.discordUrl,
        imageUrl: contractMetadata.openSea.imageUrl,
        totalSupply: contractMetadata.totalSupply,
        verified: contractMetadata.openSea.safelistRequestStatus === "verified",
      });
    }
    // If metadata doesn't exist, return a 400 error message
    else {
      res.status(400).json({
        message: "Contract not found",
      });
    }
    // If an error occurs, return a 500 error message and log the error
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: "something went wrong, check the log in your terminal",
    });
  }
}