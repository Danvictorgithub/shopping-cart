import './Home.css';
import heroImage from '../gamingcpuhero.png';
import {Link} from 'react-router-dom';
function Home() {
    return(
        <div className="Home">
            <div className='homeText'>
                <h2>Gaming Technology High Availability</h2>
                <p>Get your Gaming Console at a High discounted price! From High Specs to low Specs, gaming Consoles, and of coures HandHeld PCs.
                </p>
                <Link to='/Products'><button type="button">Shop Now</button></Link>
            </div>
            <div className='imageDiv'>
                <img src={heroImage}/>
            </div>
        </div>
    )
}
export default Home;