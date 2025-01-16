import React, { useState } from "react";
import getContract from "../utils/contract";
import { ethers } from "ethers"; // Import ethers
import { parseUnits } from "ethers"; // Import parseUnits
 // Alternative import; // Select the constant from the imported constants
 
function Receiver() {
  const [charityId, setCharityId] = useState("");
  const [amount, setAmount] = useState("");
 
  const withdrawFunds = async () => {
    try {
      const contract = await getContract();
 
      // Validate inputs
      if (!charityId || !amount) {
        alert("Please enter a valid Charity ID and amount.");
        return;
      }
 
      // Convert amount to Wei
      const amountInWei = parseUnits(amount, "ether");
      console.log("Amount in Wei:", amountInWei.toString());
 
      // Fetch charity details directly using mapping
      const charity = await contract.charityRequests(charityId);
      console.log("Charity Details:", charity);
 
      // Ensure receiver address is valid
 
      // Call the withdraw function
      await contract.withdraw(charityId, amountInWei);
      await tx.wait(); 
      alert("Funds withdrawn successfully!");
    } catch (error) {
      console.error("Error withdrawing funds:", error);
      alert("Error withdrawing funds: " + error.message);
    }
  };
 
  return (
    <div style={{ textAlign: "center", marginTop: "20vh",paddingTop: "40px", paddingBottom: "40px" }}>
      <h1 style={{ color: "#235430" }}>Receiver Panel</h1>
      <div>
        <input
          type="text"
          placeholder="Charity ID"
          value={charityId}
          onChange={(e) => setCharityId(e.target.value)}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #235430", backgroundColor: "#c5e3cd" }}
          /><br></br>
        
        <input
          type="number"
          placeholder="Amount to Withdraw (ETH)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #235430", backgroundColor: "#c5e3cd" }}
          /><br></br>
        
        <button onClick={withdrawFunds} style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Withdraw</button>
      </div>
    </div>
  );
}
 
export default Receiver;
 