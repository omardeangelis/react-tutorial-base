import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";
const CartItem = ({ _id, image, name, price, countInStock, qty }) => {
  const { deleteItem, addQty, dimQty } = useGlobalContext();

  const diminuisciQty = (id) => {
    if (qty - 1 <= 0) {
      deleteItem(id);
    } else {
      return dimQty(id);
    }
  };

  const aggiungiQty = (id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(id);
  };

  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>
      <div className="qty-selector">
        <button className="btn icon-btn" onClick={() => aggiungiQty(_id)}>
          <BiPlus className="icon" />
        </button>
        <p> {qty} </p>
        <button className="btn icon-btn ">
          <BiMinus
            className="icon minus-icon"
            onClick={() => diminuisciQty(_id)}
          />
        </button>
      </div>
      <p>{price} €</p>
      <button className="btn icon-btn" onClick={() => deleteItem(_id)}>
        <MdDelete className=" icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
