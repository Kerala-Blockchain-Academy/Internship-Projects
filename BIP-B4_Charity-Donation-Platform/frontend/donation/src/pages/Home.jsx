import React from 'react';
import { useNavigate } from 'react-router-dom';
import getContract from "../utils/contract";
 
const Home = () => {
  const navigate = useNavigate();
 
  const connectWalletAndNavigate = async (role) => {
    try {
      const contract = await getContract();
      const signerAddress = (await contract.signer.getAddress()).toLowerCase();
      console.log("Signer Address:", signerAddress);
 
      let isAuthorized = false;
 
      if (role === "admin") {
        const adminAddress = (await contract.admin()).toLowerCase();
        isAuthorized = signerAddress === adminAddress;
      } else if (role === "receiver") {
        const charityId = prompt("Enter Charity ID:");
        if (!charityId || isNaN(charityId) || parseInt(charityId) <= 0) {
          alert("Invalid Charity ID.");
          return;
        }
 
        const charity = await contract.charityRequests(charityId);
        const receiverAddress = charity.receiver.toLowerCase();
        console.log("Receiver Address:", receiverAddress);
 
        isAuthorized = signerAddress === receiverAddress;
      } else if (role === "donation") {
        isAuthorized = true;
      }
 
      if (isAuthorized) {
        navigate(`/${role}`);
      } else {
        alert(`Access Denied: You are not authorized as a ${role}.`);
      }
    } catch (error) {
      console.error(`Error verifying ${role} status:`, error);
      alert("Error connecting to MetaMask: " + error.message);
    }
  };
 
 
  return (
    <div style={{ textAlign: "center", marginTop: "20vh", color: "#333",border: "1px solid ",borderColor:"#a4c29b", borderRadius: "1px",paddingTop: "80px",paddingBottom: "80px"}}>
      <h1>Welcome to Charity Donation Platform</h1>
      <p style={{color:"#235430"}}>Make a difference in someone's life by donating or receiving support.</p><br></br>
      <button 
        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={() => connectWalletAndNavigate("admin")}
      >
        Login as Admin
      </button>
      <button
        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={() => connectWalletAndNavigate("receiver")}
      >
        Login as Receiver
      </button>
      <button
      style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={() => connectWalletAndNavigate("donation")}
      >
        Login as Donator
      </button>
    </div>
  );
};
 
export default Home;
 