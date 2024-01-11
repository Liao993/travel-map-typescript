import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }
  return (
    <nav>
      <div className="flex flex-row items-center my-2 mx-10 gap-5">
        <Link to="/maps">Maps</Link>
        <Link className=" hover:text-orange-300" to="/">
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
