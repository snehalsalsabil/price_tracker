import React from 'react';

// Functional component to display a list of search texts as buttons
function SearchTextList({ searchTexts, onSearchTextClick }) {
  return (
    <div>
      {/* Heading for the list */}
      <h2>All Products</h2>
      {/* Unordered list to contain the search text buttons */}
      <ul>
        {/* Map over each search text and create a list item with a button */}
        {searchTexts.map((searchText, index) => (
          <li key={index} onClick={() => onSearchTextClick(searchText)}>
            {/* Button displaying the search text */}
            <button>{searchText}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchTextList;
