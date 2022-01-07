#!/usr/bin/env node

const { Wallet } = require('ethers')
const { program } = require('commander')

program.version(require('./package.json').version)

program.option('-m, --mnemonic <mnemonic>', 'Mnemonic phrase to use instead of randomly generated one')

program.parse(process.argv)

const mnemonic = program.opts().mnemonic
const wallet = mnemonic ? Wallet.fromMnemonic(mnemonic) : Wallet.createRandom()

console.log(`Wallet address: ${wallet.address}\n`)
console.log(`Save the following two, but keep'em super private!`)
console.log(`  Private key: ${wallet.privateKey}`)
console.log(`  Mnemonic: ${wallet.mnemonic.phrase}`)
