# `dbank`

A simple decentralized bank account simulation built on the ICP blockchain.
One can add or withdraw money from an account balance.
This application was created to explore the fundamental concepts and core aspects of ICP DApp development.

## Running locally

1. To run the DBank DApp with full functionality (including the frontend), you'll need to set it up on your local machine.
This requires the ICP development infrastructure and creating a local replica of the ICP blockchain for development purposes.
Follow this guide to get started: https://internetcomputer.org/docs/current/tutorials/developer-journey/level-0/dev-env

2. Alternatively, if you only want to inspect the backend code, you can use online ICP development tools such as Motoko Playground.
Link to Motoko Playground: https://m7sm4-2iaaa-aaaab-qabra-cai.ic0.app/


To run the project locally after setting the environment, execute the following commands:
1. In one terminal, start the local replica with:
```bash
dfx start
```
2. In another terminal, deploy the canisters and start the frontend with:
```bash
dfx deploy
npm start
```
3. Open your web browser and navigate to the URL displayed in your terminal.
