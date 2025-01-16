# iHive - A Decentralized Idea Management Platform

This is a project submitted by [**Joshwa Thomas**](https://github.com/joshwat33), [**Rao Thomas**](https://github.com/BingVader), **Rishil Shajan** & **Abhishek V Wills** as a part of their 3-month Blockchain Internship program under the guidance of [**Mobin Mohanan**](https://github.com/tr1sm0s1n).

This repository showcases our project iHive developed during our internship at <a href="https://github.com/Kerala-Blockchain-Academy" target="_blank">Kerala-Blockchain-Academy</a>.
iHive is a blockchain-based platform designed for decentralized idea storage and management. Built on the Ethereum blockchain, it ensures transparency and security while fostering innovation. This README provides comprehensive instructions to help you set up, and run the iHive project seamlessly.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Commands Breakdown](#commands-breakdown)

## Introduction
iHive allows users to:
- Submit and securely store ideas on the blockchain.
- Avoid duplication by checking existing entries in a decentralized ledger.
- Leverage MetaMask for user authentication and payment processing.


## Prerequisites
Before proceeding, ensure you have the following installed on your system:
- **Node.js** (Latest LTS version recommended)  
  Download from [Node.js Official Website](https://nodejs.org/).
- **npm** (Comes bundled with Node.js)
- **MetaMask** (Installed as a browser extension)  
Install from [MetaMask Official Website](https://metamask.io/) and add the Holesky test network to the MetaMask.
- **Hardhat** (For Ethereum smart contract development and deployment)

In this project, we have utilised pinata website to store data in the IPFS. To ensure the data is stored in the IPFS, you need to create an account in the [Pinata Website](https://pinata.cloud/) and create a private key. Store the details of the api key safely. 


## Installation Steps
Follow these steps to set up and deploy the iHive project:

1. **Clone the Repository**  
   ```bash
   git clone [repository-link]
   cd [repository-folder]
   ```

2. **Install backend dependencies**  
   ```bash
   npm install
   ```

3. **Install frontend**
   ```bash
   cd frontend
   npm install
   ```

4. **Create a .env file to store the details of pinata website**

    Store the gateway id and JWT key of api key in the given format.
    ```bash
    VITE_PINATA_JWT=<JWT_key>
    VITE_GATEWAY_URL=<gateway_id>
    ```
4. **Run the Frontend**  
   ```bash
   npm run dev
   ```

## Commands Breakdown
1. `npm install`  
   Installs necessary dependencies mentioned in the package.json file.

2. `npm run dev`  
   Starts the development server for the frontend.

---
