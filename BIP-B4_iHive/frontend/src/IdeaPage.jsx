import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Contract,  BrowserProvider } from "ethers";
import { contractAddress } from "./deployed_addresses.json";
import { abi } from "./IHive.json";

function IdeaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get location object to access state
  const account = location.state?.account; // Retrieve the account from state
  console.log("Account:", account);

  const handleSearch = async(e) => {
    e.preventDefault();
    if (!searchQuery) {
      alert("Please enter a search query.");
      return;
    }
    setIsLoading(true);
    if (account) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const instance = new Contract(contractAddress, abi, signer);
      try {
        // Call the `searchSimilarIdeas` function from the smart contract
        const result = await instance.searchSimilarIdeas(searchQuery);
  
        // Process the result (list of similar ideas)
        setIdeas(result);
      } catch (error) {
        console.error("Error fetching ideas:", error);
        alert("Failed to search ideas.");
      }
    };
    setIsLoading(false);
  };

  const handleSubmitIdea = () => {
    // Navigate to the submit page, passing the account along
    navigate("/submit", { state: { account } });
  };

  return (
    <div className="idea-page">
      {/* NavBar */}
      <nav className="navbar">
        <h1>Welcome {account ? `  ${account}` : ""}</h1>
      </nav>
  
      {/* Main Content */}
      <div className="main-actions">
        <button onClick={handleSubmitIdea} className="submit-button">
          Submit Idea
        </button>
  
        {/* Fixed Search Bar with Search Button */}
        <div className="search-bar-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ideas..."
          />
          <button onClick={handleSearch} disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
  
        {/* Display the Results BELOW the search bar */}
        {ideas.length > 0 && (
          <div className="search-results">
            <h2>Similar Ideas:</h2>
            <ul>
              {ideas.map((idea, index) => (
                <li key={index}>
                  <strong>Title:</strong> {idea.title}
                  <br />
                  <strong>Tagline:</strong> {idea.tagline}
                  <br />
                  <strong>For further details regarding this idea, check out the link below</strong>
                  <br />
                  https://gateway.pinata.cloud/ipfs/{idea.ipfsHash}
                  <br />
                  <br/>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default IdeaPage;