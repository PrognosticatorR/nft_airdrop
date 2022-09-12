'use strict';
const axios = require('axios');
const fs = require('fs');
const key = process.env.API_KEY;
const chain_id = process.env.CHAIN_ID;
const contract = process.env.CONTRACT_ADDRESS;

module.exports = async function (params) {
  const { nft_id, nft_data, owner_address } = params;
  const data = {
    key,
    chain_id,
    contract,
    nft_id,
    nft_data: JSON.stringify(nft_data),
    to: owner_address,
  };
  const res = await axios.post('https://thentic.tech/api/nfts/mint', data);
  fs.readFileSync('output/userdata', 'utf-8');
  fs.writeFileSync(
    'output/userdata',
    JSON.stringify(JSON.stringify({ data: res.data, user: owner_address })),
    {
      flag: 'a+',
    }
  );
};
