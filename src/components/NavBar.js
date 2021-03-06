import logo from "../assets/img/logo1.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className='navbar bg-dark'>
        <div className='container-fluid justify-content-btween'>
          <div className='navbar-brand'>
            <img
              src={logo}
              alt='logo'
              width='60'
              height='60'
              className='d-inline-block align-text-top mx-3'
            />
          </div>
          <div className='mx-3'>
            <Link
              to='/'
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              <i class='fas fa-home'></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
