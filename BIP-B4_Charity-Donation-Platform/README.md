# Charity Donation Tracking System

This is a project submitted by # Arsha Karma(https://github.com/Arsha-Karma) , # Aleena Joseph & # Deepthi C D as a part of their 3-month Blockchain Internship program under the guidance of # Lekshmi P G (https://github.com/pglekshmi)
The **Charity Donation Tracking System** is a decentralized application (DApp) that allows transparent and secure charity donations using **Ethereum smart contracts**. It consists of two parts:
1. **Smart contracts** deployed using **Hardhat**.
2. **Frontend** built with **React**.

This guide will walk you through the steps to run the system locally.

---

## Prerequisites

Make sure you have the following installed:
- **Node.js** (for React and frontend dependencies)
- **Hardhat** (for smart contract deployment)
- **MetaMask** (or another Ethereum wallet)
- **Ethereum Test Network** (e.g., Hardhat Network for local testing)

---

## Step-by-Step Guide to Run the System

### Step 1: Clone the Repository

Start by cloning the repository:

```bash
git clone https://github.com/your-username/kba-project-main.git
```

Navigate to the project directory:

```bash
cd kba-project-main
```

---

### Step 2: Install Smart Contract Dependencies (Hardhat)

Navigate to the **hardhat** directory:

```bash
cd hardhat
```

Install the required dependencies:

```bash
npm install
```

This will install **Hardhat**, **ethers.js**, and other dependencies for smart contract development.

---

### Step 3: Compile Smart Contracts

Once the dependencies are installed, compile the smart contracts:

```bash
npx hardhat compile
```

This will compile your **Solidity** contracts and generate the necessary artifacts.

---

### Step 4: Start Hardhat Network and Deploy Smart Contracts

Start the local Hardhat network:

```bash
npx hardhat node
```

This will start a local Ethereum network at `http://localhost:8545`. Keep this terminal open.

In a new terminal window, navigate to the **hardhat** directory and deploy the contracts:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Once deployed, Hardhat will show the **contract address**. Copy this address, as you'll need it for the frontend.

---

### Step 5: Configure the React Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd C:\Users\arnai\Desktop\gkb\Charity\frontend\donation
   ```

2. **Install React dependencies**:

   Install all required packages:

   ```bash
   npm install
   ```

3. **Update the Smart Contract Address**:

   After deploying the contract, open **frontend/src/config.js** and paste the deployed contract address in the appropriate place.

4. **Install ethers.js**:

   If you haven't already, install **ethers.js** to interact with the Ethereum network:

   ```bash
   npm install ethers
   ```

---

### Step 6: Run the React Development Server

Start the React development server:

```bash
npm run dev
```

This will run the frontend at **http://localhost:3000** by default.

---

### Step 7: Access the Application

Open your browser and go to:

```plaintext
http://localhost:3000
```

You should now see the **Charity Donation Tracking System** frontend, where users can donate, register, and track charity transactions.

Video Link: https://youtu.be/5-xUV9gDPaY?si=DUneo_uwTqbiGztt


