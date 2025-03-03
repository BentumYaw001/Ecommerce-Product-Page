import Logo from "/src/images/logo.svg";
import Menu from "/src/images/icon-menu.svg";
import Cart from "/src/images/icon-cart.svg";
import Avatar from "/src/images/image-avatar.png";

function NavBar() {
  return (
    <>
      <nav>
        <div className="LeftSide">
          <img src={Menu} alt="" />
          <img src={Logo} alt="" className="Logo" />
        </div>
        <div className="RightSide">
          <img src={Cart} alt="" />
          <img src={Avatar} alt="" className="Avatar" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
