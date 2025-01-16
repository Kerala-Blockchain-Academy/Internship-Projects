import React, { useEffect, useState } from "react";

function FetchDataComponent({ onDataFetched }) {
  const [data, setData] = useState(null); // State to store fetched data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    // URL from where the data is fetched
    const apiUrl = "https://gateway.pinata.cloud/ipfs/bafkreiceaqm24dphcts3xfl56s4kxoak6r6iif2za6tsccgxv3kdcgknse";

    // Fetch the data when the component mounts
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store the fetched data in state
        setIsLoading(false); // Set loading to false
        onDataFetched(data); // Pass the data to the parent component
      })
      .catch((error) => {
        setError(error.message); // Store the error in state
        setIsLoading(false); // Set loading to false
      });
  }, [onDataFetched]); // Empty dependency array ensures this runs once when the component mounts

  if (isLoading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the fetched JSON data */}
    </div>
  );
}

export default FetchDataComponent;
