import Cart from "./components/Cart";
import ContentBody from "./components/MainBody";
import NavBar from "./components/Nav";
import SideBar from "./components/SideBar";
import { useCartStore, useSideBarStore } from "./components/Store";

function App() {
  const { SideBarOpen } = useSideBarStore();
  const { CartOpen } = useCartStore();
  return (
    <>
      <div className="App">
        {SideBarOpen ? <SideBar /> : ""}
        {CartOpen ? <Cart /> : ""}
        <NavBar />
        <ContentBody />
      </div>
    </>
  );
}

export default App;
