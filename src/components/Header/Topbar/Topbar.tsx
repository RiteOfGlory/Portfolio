import './Topbar.scss';
import topbarDivider from './topbar-divider.svg';
import {useState, useRef, useEffect} from "react";

import DropDownArrow from './assets/dropdownArrow.svg';

function ArtbookDropdown({ active }: { active: boolean } ) {
    return (
        <div className={`artbook-dropdown ${active ? 'active' : 'not-active'}`}>
            <a href="/public">Concept Art</a>
            <a href="/public">Webdesign</a>
            <a href="/public">Sketches</a>
        </div>
    );
}

export default function Topbar() {
    const [isArtbookDropdownOpen, setIsArtbookDropdownOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Create a handler to click anywhere else on the page to close the dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsArtbookDropdownOpen(false);
            }
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("scroll", handleScroll);
        }
    }, [dropdownRef]);



    return (
        // <div className="topbar">
        <div className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
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
                    <div className={`artbook-text ${isArtbookDropdownOpen ? 'active' : 'not-active'}`}>
                        <div className="artbook-actual-text">Artbook</div>
                        <img src={DropDownArrow} alt="dropdown arrow"/>
                    </div>
                    {/*{isArtbookDropdownOpen && <ArtbookDropdown active={isArtbookDropdownOpen}/>}*/}
                    <ArtbookDropdown active={isArtbookDropdownOpen}/>
                </div>
                <a href="/">About Me</a>
            </div>
        </div>
    );
}