import './Topbar.scss';
import topbarDivider from './topbar-divider.svg';
import {useState, useRef, useEffect} from "react";

function ArtbookDropdown() {
    return (
        <div className="artbook-dropdown">
            <a href="/public">Concept Art</a>
            <a href="/public">Webdesign</a>
            <a href="/public">Sketches</a>
        </div>
    );
}

export default function Topbar() {
    const [isArtbookDropdownOpen, setIsArtbookDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Create a handler to click anywhere else on the page to close the dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsArtbookDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropdownRef]);



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
                <div
                    className="artbook"
                    onClick={ () => setIsArtbookDropdownOpen(!isArtbookDropdownOpen)}
                    ref={dropdownRef}
                >
                    <div className={`artbook-text ${isArtbookDropdownOpen ? 'active' : ''}`}>Artbook</div>
                    {isArtbookDropdownOpen && <ArtbookDropdown />}
                </div>
                <a href="/">About Me</a>
            </div>
        </div>
    );
}