import './Footer.css';
import githubLogo from '../githubLogo.png';
function Footer() {
    return(
        <div className="Footer">
            <h3>Copyright © 2022 DanvictorGithub</h3>
            <img src={githubLogo}/>
        </div>
    )
}
export default Footer;