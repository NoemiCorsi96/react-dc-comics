import FaceIcon from '../img/footer-facebook.png';
import TwitterIcon from '../img/footer-twitter.png';
import TubeIcon from '../img/footer-youtube.png';
import PinterestIcon from '../img/footer-pinterest.png';
import PeriscopeIcon from '../img/footer-periscope.png';
export default function AppFooter() {
    return (
        <>
            <footer>
                <button>SIGN-UP NOW!</button>
                <div className="social">
                    <span>FOLLOW US</span>
                    <img src={FaceIcon} alt="Facebook" />
                    <img src={TwitterIcon} alt="Twitter" />
                    <img src={TubeIcon} alt="YouTube" />
                    <img src={PinterestIcon} alt="Pinterest" />
                    <img src={PeriscopeIcon} alt="Periscope" />
                </div>
            </footer>
        </>
    )
}