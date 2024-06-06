import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="Navbar">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/shop'}>Shop</Link></li>
            <li><Link to={'/cart'}>Cart</Link></li>
            </ul>
        </div>
    );
};

export default Nav;