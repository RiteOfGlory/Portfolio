import './Topbar.scss';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-text">
                <div className="topbar-title">Theon Bigcockinson</div>
                <div className="topbar-motto">Are ya winnin' son?</div>
            </div>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/">Artbook</a>
                <a href="/">About Me</a>
            </div>
        </div>
    );
}