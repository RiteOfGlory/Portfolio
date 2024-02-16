import Topbar from "./Topbar/Topbar";
import TopbarMobile from "./Mobile/TopbarMobile";

import './Header.scss';

export default function Header() {
    return (
        <header className="header-navbar">
            <Topbar />
            {/*<TopbarMobile />*/}
        </header>
    )
}