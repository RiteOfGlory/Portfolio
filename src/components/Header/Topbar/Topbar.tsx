import './Topbar.scss';
import topbarDivider from './topbar-divider.svg';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-text">
                {/*<div className="topbar-title">Theon Bigcockinson</div>*/}
                {/*<div className="topbar-motto">Are ya winnin' son?</div>*/}
                <div className="topbar-title">Victor Alves</div>
                <div className="topbar-divider">
                    <img src={topbarDivider} alt="divider"/>
                </div>
            </div>
            <div className="navbar">
            <a href="/">Home</a>
                <a href="/">Artbook</a>
                <a href="/">About Me</a>
            </div>
        </div>
    );
}