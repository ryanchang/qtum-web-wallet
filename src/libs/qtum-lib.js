import bitcoin from 'bitcoinjs-lib'
import config from 'libs/config'

let pubKeyHash = ''
let wif = ''
let scriptHash = ''
switch (config.get('network', 'testnet'))
{
  case 'testnet':
    pubKeyHash = 0x78
    scriptHash = 0x6e
    wif = 0xef
    break
  case 'mainnet':
    pubKeyHash = 0x3a
    scriptHash = 0x32
    wif = 0x80
    break
}
bitcoin.networks.bitcoin.pubKeyHash = pubKeyHash
bitcoin.networks.bitcoin.scriptHash = scriptHash
bitcoin.networks.bitcoin.wif = wif

export default bitcoin