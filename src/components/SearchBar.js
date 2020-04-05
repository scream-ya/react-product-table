import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
};

function SearchBar(props) {
  const { handleChange } = props;
  return (
    <div>
      <input type="text" id="filterText" placeholder="Search..." className="inline" onChange={handleChange} />
      <input type="checkbox" id="inStockOnly" onChange={handleChange} className="inline" />
      Only show products in stock
    </div>
  );
}

SearchBar.propTypes = propTypes;

export default SearchBar;
