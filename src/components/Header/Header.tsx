import Topbar from "./Topbar/Topbar";
import TopbarMobile from "./Mobile/TopbarMobile";

export default function Header() {
    return (
        <header className="header-navbar">
            <Topbar />
            {/*<TopbarMobile />*/}
        </header>
    )
}