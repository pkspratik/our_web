
import { Link } from "react-router-dom";
import './NavBar.css';
export function NavBar(prop) {
  return (
  <div >
    <nav
      className="d-flex justify-content-between align-items-center p-2 m-1 navbar-custom shadow-lg"
    >
      {/* Brand Title */}
      <div>
        <span className="fw-bolder fs-5">{prop.BrandTitle}</span>
      </div>

      {/* Menu Items */}

        <div>
        {prop.MenuItems && prop.MenuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
            // className="mx-2 text-decoration-none text-dark"
            className="navbar-item px-3 mx-1 fw-bold text-decoration-none text-white"
          >
            {item}
          </Link>
        ))}
      </div>


      {/* <div>
        {prop.MenuItems &&
          prop.MenuItems.map((item, index) => (
            <span
              key={index}
              className="navbar-item px-3 mx-1 fw-bold"
              onClick={() => alert(`${item} clicked`)} // ✅ clickable
            >
              {item}
            </span>
          ))}
      </div> */}

      {/* Search Box */}
      <div className="input-group" style={{ width: "200px" }}>
        <input
          type="text"
          className="form-control bg-transparent text-white border-0"
          placeholder="Search"
        />
        <button className="btn btn-warning bi bi-search"></button>
      </div>
    </nav>
  </div>
);

}