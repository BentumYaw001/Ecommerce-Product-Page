import { useEffect } from "react";

import {
  useCartFunctionalityStore,
  useCartStore,
  useCheckoutStore,
  useProductStore,
} from "./Store";
import DeleteItem from "/src/images/icon-delete.svg";
function Cart() {
  const { CartContent, clearCart, removeItem, isCartClosed } = useCartStore();
  const { isRemoveItem } = useCartFunctionalityStore();
  const { cart, ResetCart } = useProductStore();
  const { isSuccess } = useCheckoutStore();

  useEffect(() => {
    if (CartContent.length === 0) {
      isRemoveItem();
    }
  }, [CartContent.length]);

  return (
    <>
      <div className="CartCentered">
        <div className="Cart">
          <h3>Cart</h3>
          {CartContent.length == 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {CartContent.map((item) => (
                  <li key={item.id} className="ProductList">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="ProductImage"
                    />
                    <div className="ProductList DeleteItem">
                      <div>
                        <p>{item.name}</p>
                        <div className="ProductList ">
                          <p>
                            ${item.price.toFixed(2)} x {cart}
                          </p>
                          <h4>${(item.price * cart).toFixed(2)}</h4>
                        </div>
                      </div>
                      <img
                        src={DeleteItem}
                        alt="delete item image"
                        onClick={() => {
                          removeItem(item.id);
                          ResetCart();
                        }}
                        className="DeleteImage"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div
                onClick={() => {
                  clearCart();
                  isCartClosed();
                  ResetCart();
                  isRemoveItem();
                  isSuccess();
                }}
                className="AddToCart Checkout"
              >
                Checkout
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
