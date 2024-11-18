// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to store dog image URL
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch random dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL from the response data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false); // Stop loading if there's an error
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading message if still fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Show dog image once fetched
      )}
    </div>
  );
}

export default App;
