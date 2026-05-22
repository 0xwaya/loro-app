import { Network } from 'alchemy-sdk';

const EVM_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

export function parseRequestBody(req) {
  try {
    return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch (_error) {
    return null;
  }
}

export function isValidEvmAddress(address) {
  return EVM_ADDRESS_REGEX.test(address || '');
}

export function resolveAlchemyNetwork(chain) {
  if (typeof chain !== 'string') return null;
  const normalizedChain = chain.trim().toUpperCase();
  return Object.prototype.hasOwnProperty.call(Network, normalizedChain) ? Network[normalizedChain] : null;
}
