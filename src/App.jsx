import Cart from "./components/Cart";
import CheckoutSuccess from "./components/CheckoutSuccess";
import ContentBody from "./components/MainBody";
import NavBar from "./components/Nav";
import SideBar from "./components/SideBar";
import {
  useCartStore,
  useCheckoutStore,
  useSideBarStore,
} from "./components/Store";

function App() {
  const { SideBarOpen } = useSideBarStore();
  const { CartOpen } = useCartStore();
  const { checkout } = useCheckoutStore();
  return (
    <>
      <div className="App">
        {SideBarOpen ? <SideBar /> : ""}
        {CartOpen ? <Cart /> : ""}
        {checkout ? <CheckoutSuccess /> : ""}
        <NavBar />
        <ContentBody />
      </div>
    </>
  );
}

export default App;
