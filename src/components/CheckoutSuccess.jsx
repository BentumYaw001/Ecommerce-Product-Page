import { useCheckoutStore } from "./Store";
import Checkout from "/src/images/Checkout.svg";

function CheckoutSuccess() {
  const { isNotSuccess } = useCheckoutStore();
  return (
    <>
      <div className="CartCentered SideBar ">
        <div className="Success">
          <img src={Checkout} alt="" />
          <h5>Checkout Successfull !</h5>
          <div className="AddToCart" onClick={isNotSuccess}>
            OK
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutSuccess;
