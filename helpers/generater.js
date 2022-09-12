require('dotenv').config();
const fs = require('fs');
const Traits = require('../constants/traits');

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const build = async (index, owner_address, onComplete) => {
  const _traits = [];
  const background = Traits.getBackground();
  _traits.push({
    trait_type: 'Background',
    value: background,
  });

  const bodyAndHead = Traits.getBodyAndHead();
  _traits.push({
    trait_type: 'Body',
    value: bodyAndHead,
  });

  const outfit = Traits.getOutfit();
  _traits.push({
    trait_type: 'Outfit',
    value: outfit,
  });

  _traits.push({
    trait_type: 'Head',
    value: bodyAndHead,
  });

  const nose = Traits.getNose();
  _traits.push({
    trait_type: 'Nose',
    value: nose,
  });

  const mouth = Traits.getMouth();
  _traits.push({
    trait_type: 'Mouth',
    value: mouth,
  });

  const eyes = Traits.getEyes();
  _traits.push({
    trait_type: 'Eyes',
    value: eyes,
  });

  const sunglasses = Traits.getSunglasses();

  _traits.push({
    trait_type: 'Sunglasses',
    value: sunglasses,
  });

  const headwear = Traits.getHeadwear();
  _traits.push({
    trait_type: 'Headwear',
    value: headwear,
  });

  await sleep(200);
  const data = {
    name: 'My Test NFT #' + index,
    traits: _traits,
  };
  fs.writeFileSync('Output/Metadata/' + index, JSON.stringify(data));
  const params = { nft_id: index, nft_data: data, owner_address };
  await onComplete(params);
};

module.exports = {
  build,
};
