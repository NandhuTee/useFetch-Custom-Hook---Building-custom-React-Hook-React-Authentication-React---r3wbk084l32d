import React from 'react';
import useFetch from '../components/useFetch';

function Home() {
  // Use the custom hook with the provided URL
  const { data, loading, error } = useFetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1');

  // Display a loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there is an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the fetched data
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {/* Map through the data and display the titles */}
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
