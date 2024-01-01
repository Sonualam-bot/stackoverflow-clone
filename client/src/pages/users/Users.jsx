import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import "./Users.css";
import { useLocation } from "react-router-dom";
import UsersList from "./UsersList";
import "./Users.css";

function Users() {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        {location?.pathname === "/Users" ? <UsersList /> : <></>}
      </div>
    </div>
  );
}

export default Users;
