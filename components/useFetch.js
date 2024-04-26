import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data from the provided URL
    async function fetchData() {
      try {
        // Set loading to true at the start of the fetch process
        setLoading(true);
        // Fetch data from the provided URL
        const response = await fetch(url);
        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        const result = await response.json();
        // Update data state with the fetched data
        setData(result);
        // Set error state to null since the request was successful
        setError(null);
      } catch (err) {
        // If an error occurs, update the error state with the error message
        setError(err.message);
      } finally {
        // Set loading to false since the fetch process is complete
        setLoading(false);
      }
    }

    // Call the fetchData function
    fetchData();
  }, [url]); // Add url to the dependency array to refetch data if the URL changes

  // Return the data, loading, and error states
  return { data, loading, error };
}

export default useFetch;
