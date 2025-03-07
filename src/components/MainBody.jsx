import ShoeGallery from "./ShoeGallery";
import ProductDetails from "./ProductDetails";
import { useCartStore } from "./Store";

const ContentBody = () => {
  const { isCartClosed } = useCartStore();

  return (
    <div onClick={isCartClosed} className="MainBodyDesktop">
      <div className="SelectItem">
        <ShoeGallery />
      </div>
      <ProductDetails />
    </div>
  );
};

export default ContentBody;
