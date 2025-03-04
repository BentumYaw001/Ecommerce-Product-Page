import { useSideBarStore } from "./Store";
import Close from "/src/images/icon-close.svg";

function SideBar() {
  const { isClosed } = useSideBarStore();
  return (
    <>
      <div className="SideBar">
        <div className="SideItems">
          <img src={Close} alt="" onClick={isClosed} />
          <ol>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default SideBar;
