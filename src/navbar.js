import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Rovers Club</h1>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
        </div>
     );
}
 
export default Navbar;