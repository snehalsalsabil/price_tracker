import React, { useState } from "react";
import ModalComponent from './Modal';
import ProductDetailsPage from "./ProductDetailsPage";

function PriceHistoryTable({ priceHistory, onClose }) {
  // State to manage whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the current product being viewed in the modal
  const [currentProduct, setCurrentProduct] = useState({});

  // Function to open the modal and set the current product
  const openModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to get the latest price data for a product
  const getPriceData = (product) => {
    return product.priceHistory[0];
  };

  // Function to calculate the price change percentage between the latest and previous price
  const getPriceChange = (product) => {
    if (product.priceHistory.length < 2) return 0; // No change if there's only one price record
    const currentPrice = product.priceHistory[0].price;
    const lastPrice = product.priceHistory[1].price;
    const change = 100 - (currentPrice / lastPrice) * 100;
    return Math.round(change * 100) / 100; // Round to two decimal places
  };

  return (
    <div>
      <h2>Price History</h2>
      <table>
        <thead>
          <tr className="row">
            <th>Updated At</th> {/* Column for the date the price was updated */}
            <th>Name</th> {/* Column for the product name */}
            <th>Price</th> {/* Column for the product price */}
            <th>Price Change</th> {/* Column for the price change percentage */}
          </tr>
        </thead>
        <tbody>
          {priceHistory.map((product) => {
            const priceData = getPriceData(product); // Get the latest price data
            const change = getPriceChange(product); // Calculate the price change

            return (
              <tr key={product.url} className="row">
                <td>{priceData.date}</td> {/* Display the updated date */}
                <td>
                  <a onClick={() => openModal(product)}>{product.name}</a> {/* Link to open the modal with product details */}
                </td>
                <td>${priceData.price}</td> {/* Display the product price */}
                <td style={change > 0 ? { color: "red" } : { color: "green" }}> {/* Style the price change based on positive or negative change */}
                  {change >= 0 && "+"} {/* Add a plus sign if the change is positive */}
                  {change}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={onClose}>Close</button> {/* Button to close the price history view */}
      <ModalComponent
        isOpen={isModalOpen} // Pass the state to manage modal visibility
        closeModal={closeModal} // Function to close the modal
        content={<ProductDetailsPage product={currentProduct} />} // Pass the current product details to the modal content
      />
    </div>
  );
}

export default PriceHistoryTable;
