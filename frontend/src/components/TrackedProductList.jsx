import axios from "axios";
import React, { useEffect, useState } from "react";

const TrackedProductList = () => {
  // State variables to hold the list of tracked products and the name of a new tracked product
  const [trackedProducts, setTrackedProducts] = useState([]);
  const [newTrackedProduct, setNewTrackedProduct] = useState("");

  // Function to fetch the tracked products from the server
  useEffect(() => {
    fetchTrackedProducts();
  }, []);

  const fetchTrackedProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/tracked-products"
      );

      setTrackedProducts(response.data);
    } catch (error) {
      console.error("Error fetching tracked products:", error);
    }
  };

  // Event handler for changes in the input field for a new tracked product
  const handleNewTrackedProductChange = (event) => {
    setNewTrackedProduct(event.target.value);
  };

  // Event handler for adding a new tracked product
  const handleAddTrackedProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/add-tracked-product",
        {
          name: newTrackedProduct,
        }
      );
      const { id } = response.data;
      // Add the new product to the list of tracked products
      setTrackedProducts((prevProducts) => [
        ...prevProducts,
        { id, name: newTrackedProduct, tracked: true },
      ]);
      // Clear the input field
      setNewTrackedProduct("");
    } catch (error) {
      console.error("Error adding tracked product:", error);
    }
  };

  // Event handler for toggling the tracking status of a product
  const handleToggleTrackedProduct = async (productId) => {
    try {
      await axios.put(`http://localhost:5000/tracked-product/${productId}`);
      // Toggle the tracking status of the product in the list of tracked products
      setTrackedProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, tracked: !product.tracked }
            : product
        )
      );
    } catch (error) {
      console.error("Error toggling tracked product:", error);
    }
  };

  // Render the list of tracked products and the input field for adding a new tracked product
  return (
    <div>
      <h2>Tracked Products</h2>
      <ul>
        {trackedProducts.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <input
              type="checkbox"
              onChange={() => handleToggleTrackedProduct(product.id)}
              checked={product.tracked}
            />
          </li>
        ))}
      </ul>

      <div>
        <h3>Add Tracked Product</h3>
        <input
          type="text"
          value={newTrackedProduct}
          onChange={handleNewTrackedProductChange}
        />
        <button onClick={handleAddTrackedProduct}>Add</button>
      </div>
    </div>
  );
};

export default TrackedProductList;
