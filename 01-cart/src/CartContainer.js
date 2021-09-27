import React from "react";
import { useGlobalContext } from "./context";
const CartContanier = () => {
  const { cart, total, remove, clearCart, increase, decrease } =
    useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <p>is curretly empty</p>
        </header>
      </section>
    );
  }
  // const removeItem = (id) => {
  //   return setCartItem(cartItem.filter((item) => item.id !== id));
  // };
  // const inc = (id) => {
  //   if (cartItem.id === id) {
  //     cartItem.amount += 1;
  //   }
  // };
  // const dec = (id) => {
  //   if (cartItem.id === id) {
  //     cartItem.amount -= 1;
  //   }
  //   if (cartItem.id.amount < 2) {
  //     removeItem(id);
  //   }
  // };
  return (
    <>
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
        </header>
        <div>
          {cart.map((cart) => {
            const { id, title, img, amount, price } = cart;
            return (
              <article key={id} className="cart-item">
                <img src={img} alt={title} />
                <div className="cart-title">
                  <h4>{title}</h4>
                  <h4 className="item-price">${price}</h4>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => remove(id)}
                  >
                    remove
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="amount-btn"
                    onClick={() => increase(id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                  </button>
                  <p>{amount}</p>
                  <button
                    type="button"
                    className="amount-btn"
                    onClick={() => decrease(id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>total</h4>
            <h4>${total}</h4>
          </div>
          <div className="btn-clear">
            <button
              type="button"
              className="clear-btn"
              onClick={() => clearCart()}
            >
              clear all
            </button>
          </div>
        </footer>
      </section>
    </>
  );
};

export default CartContanier;
