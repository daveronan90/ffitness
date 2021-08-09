/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

function Navbar({ open, setOpen }) {
  return (
    <div className={`text-white flex bg-base-yellow`}>
      <div
        className={`top-0 left-0 w-44 bg-base-yellow fixed h-full overflow-auto transform ease-in-out transition-all duration-300 z-30 flex flex-col items-start pl-4 pb-5 justify-center
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <li
          onClick={() => setOpen(false)}
          className="list-none font-semibold text-xl underline"
        >
          <Link to="/opengym">Gym & Classes</Link>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="list-none font-semibold text-xl underline"
        >
          <Link to="/golf">Golf</Link>
        </li>
      </div>
      <div
        className={open ? "bg-black opacity-50 inset-0 absolute z-20" : ""}
        onClick={() => setOpen(false)}
      />

      <div className={`flex flex-col justify-start items-center`}>
        <MenuButton open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
