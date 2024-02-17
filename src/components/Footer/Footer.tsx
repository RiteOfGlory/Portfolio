import './Footer.scss';
import Image from 'next/image';

import NovaChibi from '@/assets/Footer/Nova_sticker_cropped.webp';
import OnyxChibi from '@/assets/Footer/Onyx_sticker_cropped.webp';
import InstaSvg from '@/assets/Footer/icons/insta.svg';
import TwitterSvg from '@/assets/Footer/icons/twitter.svg';
import WSvg from '@/assets/Footer/icons/W.svg';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <Image src={NovaChibi} alt="Nova"/>
                <div className="footer-links">
                    <div className="footer-resume">
                        <a href="/">Resume</a>
                    </div>
                    <div className="footer-socials">
                        <a href="/">
                            <InstaSvg />
                        </a>
                        <a href="/">
                            <TwitterSvg />
                        </a>
                        <a href="/">
                            <WSvg />
                        </a>
                    </div>
                    <div className="footer-credits">
                        <div>Design: Victor Alves</div>
                        <div>Development: <a href="https://github.com/Vio-Eli">Vio-Eli</a></div>
                    </div>
                </div>
                <Image src={OnyxChibi} alt="Onyx"/>
            </div>
        </footer>
    )
}