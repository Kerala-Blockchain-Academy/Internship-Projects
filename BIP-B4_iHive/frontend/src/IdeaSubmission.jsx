import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import processData from "./write-ipfs.ts"; // Import test-ipfs component
import { contractAddress } from "./deployed_addresses.json";
import { abi } from "./IHive.json";
import { Contract, BrowserProvider } from "ethers";

function IdeaSubmission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [ideaTitle, setIdeaTitle] = useState(""); // New field for Idea Title
  const [tagline, setTagline] = useState(""); // New field for Tagline
  const [ipfsResult, setIpfsResult] = useState(null); // To store returned data from test-ipfs
  const navigate = useNavigate();
  const location = useLocation();
  const account = location.state?.account; // Retrieve the account passed via state

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert all inputs to lowercase and update the state
    setName((prevName) => prevName.toLowerCase());
    setEmail((prevEmail) => prevEmail.toLowerCase());
    setDescription((prevDescription) => prevDescription.toLowerCase());
    setIdeaTitle((prevIdeaTitle) => prevIdeaTitle.toLowerCase());
    setTagline((prevTagline) => prevTagline.toLowerCase());
    console.log("Data Submitted:", { name, email, description, ideaTitle, tagline });

    // Call test-ipfs processing function with only the relevant data
    const result = await processData({ name, email,ideaTitle,tagline, description }); // Passing only relevant data
    setIpfsResult(result.IpfsHash); // Store the returned data
    console.log("IPFS Result:", result);
    console.log("Account:", account);

    // Example: Interacting with the contract
    if (account) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const instance = new Contract(contractAddress, abi, signer);

      try {
        const tx = await instance.submitIdea(ideaTitle, tagline, result.IpfsHash);
        //await tx.wait(); // Wait for the transaction to be mined
        console.log('Transaction Hash:', tx.hash)
        alert("Idea submitted successfully!");
      } catch (error) {
        console.error("Error submitting idea:", error);
        alert("Failed to submit idea. Please try again.");
      }
    }

    // Reset fields
    setName("");
    setEmail("");
    setDescription("");
    setIdeaTitle(""); // Reset Idea Title
    setTagline(""); // Reset Tagline

    // Navigate to success page
    navigate("/idea", { state: { account } });
  };

  return (
    <div className="idea-submission-container">
      <h1>Submit Your Idea</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* New Idea Title field */}
        <div className="input-group">
          <label htmlFor="ideaTitle">Idea Title</label>
          <input
            type="text"
            id="ideaTitle"
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
          />
        </div>

        {/* New Tagline field */}
        <div className="input-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Detailed Idea Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Idea</button>
      </form>

    </div>
  );
}

export default IdeaSubmission;
