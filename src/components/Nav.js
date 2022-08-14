import './Nav.css';
import {Link} from 'react-router-dom';
function Nav({cartNum}) {
    return(
        <div className="Nav">
            <Link to='/'><h1>Now <span>Gaming!</span></h1></Link>
            <ul>
                <Link to='/Products'><li>Products</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/Cart'><li>Cart ({cartNum})</li></Link>
            </ul>
        </div>
    )
}
export default Nav;