#!/usr/bin/env node

const { Wallet } = require('ethers')

const wallet = Wallet.createRandom()

console.log(`Wallet address: ${wallet.address}\n`)
console.log(`Save the following two, but keep'em super private!`)
console.log(`  Private key: ${wallet.privateKey}`)
console.log(`  Mnemonic: ${wallet.mnemonic.phrase}`)
