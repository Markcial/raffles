import { NeynarAPIClient } from '@neynar/nodejs-sdk'
import { env } from 'node:process';

const fail = (message: string, code = 1) => {
  console.error(message);
  process.exit(code);
}

const envOrFail = (key: string) => {
  const value = env[key]
  if (!value) fail(`${key} is required`)
  return value as string
}

const apiKey = envOrFail('NEYNAR_API_KEY');
const signerUUID = envOrFail('SIGNER_UUID');

const client = new NeynarAPIClient(apiKey);

export async function cast(message: string) {
  return client.publishCast(signerUUID, message)
}
