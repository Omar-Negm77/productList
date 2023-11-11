import React from "react";

const Total = (props) => {
  const { items } = props;
  let total = 0;

  items.map(({ price, quantity }) => {
    let totalPriceForProduct = price * quantity;
    total += totalPriceForProduct;
  });
  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};

export default Total;
