import './Footer.scss';

import NovaChibi from './assets/Nova_sticker_cropped.webp';
import OnyxChibi from './assets/Onyx_sticker_cropped.webp';
// import InstaSvg from './assets/icons/insta.svg';
import { ReactComponent as InstaSvg } from './assets/icons/insta.svg';
// import TwitterSvg from './assets/icons/twitter.svg';
import { ReactComponent as TwitterSvg } from './assets/icons/twitter.svg';
// import WSvg from './assets/icons/W.svg';
import { ReactComponent as WSvg } from './assets/icons/W.svg';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <img src={NovaChibi} alt="Nova"/>
                <div className="footer-links">
                    <div className="footer-resume">
                        <a href="/">Resume</a>
                    </div>
                    <div className="footer-socials">
                        <a href="/">
                            {/*<img src={InstaSvg} alt="Instagram"/>*/}
                            <InstaSvg />
                        </a>
                        <a href="/">
                            {/*<img src={TwitterSvg} alt="Twitter"/>*/}
                            <TwitterSvg />
                        </a>
                        <a href="/">
                            {/*<img src={WSvg} alt="W"/>*/}
                            <WSvg />
                        </a>
                    </div>
                    <div className="footer-credits">
                        <div>Design: Victor Alves</div>
                        <div>Development: <a href="https://github.com/Vio-Eli">Vio-Eli</a></div>
                    </div>
                </div>
                <img src={OnyxChibi} alt="Onyx"/>
            </div>
        </footer>
    )
}