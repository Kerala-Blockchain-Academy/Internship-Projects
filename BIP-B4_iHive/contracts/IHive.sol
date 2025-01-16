// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract IHive {

    // Struct to represent an idea
    struct Idea {
        string title;      // Title of the idea
        string tagline;    // Tagline of the idea
        string ipfsHash;   // IPFS hash of the metadata
    }

    // Array to store all ideas (for searching)
    Idea[] private ideas;

    // Event to log when a new idea is submitted
    event IdeaSubmitted(
        string title,
        string tagline,
        string ipfsHash
    );

    // Submit a new idea
    function submitIdea(
        string memory title,
        string memory tagline,
        string memory ipfsHash
    ) public {
        // Ensure the idea doesn't already exist
        for (uint i = 0; i < ideas.length; i++) {
            require(
                keccak256(abi.encodePacked(ideas[i].ipfsHash)) != keccak256(abi.encodePacked(ipfsHash)),
                "Idea already exists"
            );
        }

        // Store the new idea
        ideas.push(Idea({
            title: title,
            tagline: tagline,
            ipfsHash: ipfsHash
        }));

        // Emit an event for the new idea submission
        emit IdeaSubmitted(title, tagline, ipfsHash);
    }

    // Function to search for similar ideas by title using substring matching
    function searchSimilarIdeas(string memory title)
        public
        view
        returns (Idea[] memory similarIdeas)
    {
        uint count = 0;

        // Count the number of similar ideas
        for (uint i = 0; i < ideas.length; i++) {
            if (_containsSubstring(ideas[i].title, title)) {
                count++;
            }
        }

        // Create a temporary array to store the similar ideas
        similarIdeas = new Idea[](count);
        uint index = 0;

        for (uint i = 0; i < ideas.length; i++) {
            if (_containsSubstring(ideas[i].title, title)) {
                similarIdeas[index] = ideas[i];
                index++;
            }
        }
    }

    // Helper function to check if `needle` is a substring of `haystack`
    function _containsSubstring(string memory haystack, string memory needle) private pure returns (bool) {
        bytes memory haystackBytes = bytes(haystack);
        bytes memory needleBytes = bytes(needle);

        if (needleBytes.length > haystackBytes.length) {
            return false;
        }

        for (uint i = 0; i <= haystackBytes.length - needleBytes.length; i++) {
            bool matchFound = true;

            for (uint j = 0; j < needleBytes.length; j++) {
                if (haystackBytes[i + j] != needleBytes[j]) {
                    matchFound = false;
                    break;
                }
            }

            if (matchFound) {
                return true;
            }
        }

        return false;
    }
}
