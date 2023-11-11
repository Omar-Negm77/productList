import React from "react";

const Items = (props) => {
  const { items, del, increase, decrease } = props;
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p style={{ display: "flex", justifyContent: "space-around" }}>
            {item.product}
            <button
              style={{ width: "10%", borderRadius: 50 }}
              onClick={() => increase(item.id)}
            >
              +
            </button>
            <button
              style={{ width: "10%", borderRadius: 50 }}
              onClick={() => decrease(item.id)}
            >
              -
            </button>
          </p>
          <p>{item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <p>{item.quantity}</p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
