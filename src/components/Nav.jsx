import Logo from "/src/images/logo.svg";
import Menu from "/src/images/icon-menu.svg";
import Cart from "/src/images/icon-cart.svg";
import Avatar from "/src/images/image-avatar.png";
import {
  useCartFunctionalityStore,
  useCartStore,
  useProductStore,
  useSideBarStore,
} from "./Store";

function NavBar() {
  const { isOpen } = useSideBarStore();
  const { toggleCart } = useCartStore();
  const { cart } = useProductStore();
  const { AddItem } = useCartFunctionalityStore();

  return (
    <>
      <nav>
        <div className="LeftSide">
          <img src={Menu} alt="" onClick={isOpen} className="Menu" />
          <img src={Logo} alt="" className="Logo" />
          <div className="">
            <ol className="NavItems">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ol>
          </div>
        </div>
        <div className="RightSide">
          <div className="CartFilled" onClick={toggleCart}>
            {AddItem ? (
              <>
                <div className="CartAlert">{cart}</div>
              </>
            ) : (
              ""
            )}
            <img src={Cart} alt="" />
          </div>
          <img src={Avatar} alt="" className="Avatar" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
