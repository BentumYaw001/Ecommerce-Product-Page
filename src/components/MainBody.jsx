import Product1 from "/src/images/image-product-1.jpg";
import Minus from "/src/images/icon-minus.svg";
import Plus from "/src/images/icon-plus.svg";
import Previous from "/src/images/icon-previous.svg";
import Next from "/src/images/icon-next.svg";
import {
  useCartFunctionalityStore,
  useCartStore,
  useProductStore,
} from "./Store";
import { ShoeData } from "./Products";

function ContentBody() {
  const { cart, addToCart, removeFromCart, ResetCart } = useProductStore();
  const { isCartClosed, addItem } = useCartStore();
  const { isAddItem } = useCartFunctionalityStore();
  return (
    <>
      <div onClick={isCartClosed}>
        <div className="SelectItem">
          <img src={Product1} alt="" className="ItemImage" />
          <div className="NextItem">
            <img src={Previous} alt="" />
            <img src={Next} alt="" />
          </div>
        </div>
        <div className="MainBody">
          <p>SNEAKER COMPANY</p>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="PriceTag">
            <div className="DiscountedPrice">
              <h1>$125.00</h1>
              <div className="Discount">50%</div>
            </div>

            <del>$250.00</del>
          </div>
          <div className="ItemQuantity">
            <img
              src={Minus}
              alt=""
              className="Minus"
              onClick={removeFromCart}
            />
            <h4>{cart}</h4>
            <img src={Plus} alt="" className="Plus" onClick={addToCart} />
          </div>
          <div
            className="AddToCart"
            onClick={() => {
              if (cart > 0) {
                addItem(ShoeData);
                isAddItem();
              }
            }}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="black"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentBody;
