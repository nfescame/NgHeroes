import { Link } from "react-router-dom";
import Img1 from "../assets/img/super.jpg";
import Img2 from "../assets/img/heroes.jpg";

function Header() {
  return (
    <div className='header my-5 bg'>
      <div className='float-md-start event eventHeader'>
        <img
          src={Img1}
          alt='description'
          style={{ width: "100%", borderRadius: "3%" }}
        />

        <div className='content'>
          <h3>All Heroes</h3>

          <div className='rollover '>
            <Link
              to='/listheroes'
              style={{
                color: "white",
                fontSize: "25px",
                borderRadius: "0rem",
              }}
            >
              CLICK TO SEE THE LIST OF CHARACTERS.
            </Link>
          </div>
        </div>
      </div>

      <div className='float-md-start event eventHeader'>
        <img
          src={Img2}
          alt='description'
          style={{ width: "100%", borderRadius: "3%" }}
        />

        <div className='content'>
          <h3>My Squad</h3>

          <div className='rollover'>
            <Link
              to='/mysquad'
              style={{
                color: "white",
                fontSize: "25px",
                borderRadius: "0rem",
              }}
            >
              CLICK TO SEE THE CREATED SQUADS.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
