import React, { useState } from "react";
import getContract from "../utils/contract";
import { ethers, parseUnits } from "ethers";
 
function Donation() {
  const [charityId, setCharityId] = useState("");
  const [amount, setAmount] = useState("");
 
  const donateFunds = async () => {
    try {
      const contract = await getContract();
 
      // Convert Ether amount to Wei for both parameter and transaction value
      const amountInWei = parseUnits(amount, "ether");
      console.log("Amount in Wei:", amountInWei.toString());
 
      // Call the donate function with both _amount and value
      await contract.donate(charityId, amountInWei);
 
      alert("Donation successful!");
    } catch (error) {
      console.error("Error donating funds:", error);
      alert("Error donating funds: " + error.message);
    }
  };
 
 
 
  return (
    <div style={{ textAlign: "center", marginTop: "20vh",paddingTop: "40px", paddingBottom: "40px" }}>
      <h1 style={{ color: "#235430" }}>Donation Page</h1>
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
          placeholder="Amount to Donate (ETH)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #235430", backgroundColor: "#c5e3cd" }}
        /><br></br>
        
        <button onClick={donateFunds} style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Donate</button>
      </div>
    </div>
  );
}
 
export default Donation;
 
