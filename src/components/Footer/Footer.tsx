import './Footer.scss';
import Image from 'next/image';
import svg from 'next/image';

import NovaChibi from '@/assets/Footer/Nova_sticker_cropped.webp';
import OnyxChibi from '@/assets/Footer/Onyx_sticker_cropped.webp';
import InstaSvg from '@/assets/Footer/icons/insta.svg';
// import { ReactComponent as InstaSvg } from '@/assets/Footer/icons/insta.svg';
import TwitterSvg from '@/assets/Footer/icons/twitter.svg';
// import { ReactComponent as TwitterSvg } from '@/assets/Footer/icons/twitter.svg';
import WSvg from '@/assets/Footer/icons/W.svg';
// import { ReactComponent as WSvg } from '@/assets/Footer/icons/W.svg';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                {/*<img src={NovaChibi} alt="Nova"/>*/}
                <Image src={NovaChibi} alt="Nova"/>
                <div className="footer-links">
                    <div className="footer-resume">
                        <a href="/">Resume</a>
                    </div>
                    <div className="footer-socials">
                        <a href="/">
                            {/*<img src={InstaSvg} alt="Instagram"/>*/}
                            <InstaSvg />
                            {/*<Image src={InstaSvg} alt="Instagram"/>*/}
                        </a>
                        <a href="/">
                            {/*<img src={TwitterSvg} alt="Twitter"/>*/}
                            <TwitterSvg />
                            {/*<Image src={TwitterSvg} alt="Twitter"/>*/}
                        </a>
                        <a href="/">
                            {/*<img src={WSvg} alt="W"/>*/}
                            <WSvg />
                            {/*<Image src={WSvg} alt="W" />*/}
                        </a>
                    </div>
                    <div className="footer-credits">
                        <div>Design: Victor Alves</div>
                        <div>Development: <a href="https://github.com/Vio-Eli">Vio-Eli</a></div>
                    </div>
                </div>
                {/*<img src={OnyxChibi} alt="Onyx"/>*/}
                <Image src={OnyxChibi} alt="Onyx"/>
            </div>
        </footer>
    )
}