import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Outlet />
      {children}
    </div>
  );
};

export default Layout;
