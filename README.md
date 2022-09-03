# new-wallet
Easily generate a new Ethereum (compatible) wallet on the command line.

## Installation and usage
Install this package directly from GitHub with `npm i -g mttmzr/new-wallet`. Then, just run `new-wallet` and - voilà - there's your new wallet.

Until ethers.js is updated to version 5.7, this cli tool uses the --openssl-legacy-provider flag to be compatible with Node 18, which is the version I use. This may break compatibility with earlier Node versions.

## Credits
This package uses [ethers.js](https://docs.ethers.io/v5/) under the hood.
