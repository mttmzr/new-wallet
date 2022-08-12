#!/usr/bin/env -S node --openssl-legacy-provider

const { Wallet } = require('ethers')
const { program } = require('commander')

program.version(require('./package.json').version)

program.option('-m, --mnemonic <mnemonic>', 'Mnemonic phrase to use instead of randomly generated one')
program.option('-i, --index <index>', 'Index to be used with derivation path', '0')

program.parse(process.argv)

const { index, mnemonic } = program.opts()
const path = `m/44'/60'/0'/0/${index}`
const wallet = mnemonic ? Wallet.fromMnemonic(mnemonic, path) : Wallet.createRandom({ path })

console.log(`Wallet address: ${wallet.address}\n`)
console.log(`Save the following two, but keep'em super private!`)
console.log(`  Private key: ${wallet.privateKey}`)
console.log(`  Mnemonic: ${wallet.mnemonic.phrase}`)
