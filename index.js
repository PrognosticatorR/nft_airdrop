const Generator = require('./helpers/generater');
const mintNFT = require('./helpers/mintNFT');
const { OWNER_ADDRESSES } = require('./constants/addresses');

const initialize = async (_owners = []) => {
  let _thisIndex = 1;
  const _maxSupply = _owners.length;
  if (_maxSupply == 0) {
    throw new Error('must provide the owner[] to mint');
  }
  while (_thisIndex <= _maxSupply) {
    try {
      console.log('Generating NFT ' + _thisIndex);
      await Generator.build(_thisIndex, _owners[_thisIndex - 1], mintNFT);
      _thisIndex += 1;
    } catch (e) {
      console.error('Error while generating NFT ' + _thisIndex);
      console.log(e);
      _thisIndex = _maxSupply + 1;
    }
  }
};
initialize(OWNER_ADDRESSES);
