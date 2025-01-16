import React, { useState } from "react";
import getContract from "../utils/contract"; // Importing getContract
import { ethers, parseUnits } from "ethers"; // Import ethers and parseUnits
 
function Admin() {
  const [charityId, setCharityId] = useState("");
  const [receiver, setReceiver] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
 
  const createCharity = async () => {
    try {
      const contract = await getContract(); // Assuming this initializes and provides the contract instance
 
      // Check if ethers is properly initialized
      if (!ethers || !parseUnits) {
        throw new Error("ethers library is not properly set up.");
      }
 
      // Ensure createCharityRequest exists on the contract instance
      if (contract.createCharityRequest) {
        // Convert maxAmount to Wei using parseUnits
        const amountInWei = parseUnits(maxAmount, 'ether');
 
        await contract.createCharityRequest(charityId, receiver, amountInWei);
        alert("Charity request created successfully!");
      } else {
        throw new Error("createCharityRequest method does not exist on contract.");
      }
    } catch (error) {
      alert("Error creating charity: " + error.message);
    }
  };
 
  return (
    <div style={{ textAlign: "center", marginTop: "20vh",paddingTop: "40px", paddingBottom: "40px" }}>
      <h1 style={{ color: "#235430" }}>Admin Panel</h1>
      <div>
        <input 
          type="text"
          placeholder="Charity ID"
          value={charityId}
          onChange={(e) => setCharityId(e.target.value)}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #235430", backgroundColor: "#c5e3cd" }}
        /><br></br>
        <input
          type="text"
          placeholder="Receiver Address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #235430", backgroundColor: "#c5e3cd" }}
        /><br></br>
        <input
          type="number"
          placeholder="Max Amount"
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #235430", backgroundColor: "#c5e3cd" }}
        /><br></br><br></br><br>
        </br>
        <button onClick={createCharity} style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} >Create Charity Request</button>
      </div>
    </div>
  );
}
 
export default Admin;
 
 