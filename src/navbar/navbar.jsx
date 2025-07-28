import { Link , useLocation} from 'react-router-dom';
import './navbar.css'

export default function Dummyproject({ search, setSearch }) {

  const location = useLocation();

  return (
    <div className="nav-container">
      <div className="logo">
        {/* <img src="/logo.png" alt="Logo" /> */}
        <h1 > HIROphotography</h1>
      </div>

      <ul className="links">
        <li><Link to="/"  className={location.pathname === "/" ? "active" : ""}
         >Home</Link></li>
        <li><Link to="/photography" className={location.pathname === "/photography" ? "active" : ""}
        >Photography</Link></li>
        {/* <li><Link to="/products">Products</Link></li> */}
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}
        >About Us</Link></li>
      </ul>

{/* <div className="login">
  <button >login</button>
</div> */}
     
    </div>
  );
}
