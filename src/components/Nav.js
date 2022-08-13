import './Nav.css';
function Nav({cartNum}) {
    return(
        <div class="Nav">
            <h1>Now <span>Gaming!</span></h1>
            <ul>
                <li>Products</li>
                <li>About</li>
                <li>Cart ({cartNum})</li>
            </ul>
        </div>
    )
}
export default Nav;