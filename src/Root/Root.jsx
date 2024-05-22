import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <NavBar></NavBar>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
