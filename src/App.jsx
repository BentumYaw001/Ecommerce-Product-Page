import ContentBody from "./components/MainBody";
import NavBar from "./components/Nav";
import SideBar from "./components/SideBar";
import { useSideBarStore } from "./components/Store";

function App() {
  const { SideBarOpen } = useSideBarStore();
  return (
    <>
      <div className="App">
        {SideBarOpen ? <SideBar /> : ""}
        <NavBar />
        <ContentBody />
      </div>
    </>
  );
}

export default App;
