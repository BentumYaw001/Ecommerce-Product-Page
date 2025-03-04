import { useCartStore } from "./Store";

function Cart() {
  const { CartContent } = useCartStore();
  return (
    <>
      <div className="CartCentered">
        <div className="Cart">
          <h3>Cart</h3>
          {CartContent.length == 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <p>Your cart is full</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
