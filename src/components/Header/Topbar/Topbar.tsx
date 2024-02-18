'use client'

import Image from 'next/image';
import localFont from 'next/font/local';
import {useState, useRef, useEffect} from "react";

// TS doesn't like the custom ?url on the import (changes the type of the import for svgr)
// @ts-ignore
import topbarDivider from '@/assets/Header/topbar-divider.svg?url';
// @ts-ignore
import DropDownArrow from '@/assets/Header/dropdownArrow.svg?url';

import './Topbar.scss';

// Our custom font
const SpellingSaltFont = localFont({
    src: '../../../assets/fonts/spellingsalt.ttf',
    display: 'swap',
    weight: '400'
})

function ArtbookDropdown({ active }: { active: boolean } ) {
    return (
        <div className={`artbook-dropdown ${active ? 'active' : 'not-active'}`}>
            <a href="/art/concept">Concept Art</a>
            <a href="/art/webdesign">Webdesign</a>
            <a href="/art/sketches">Sketches</a>
        </div>
    );
}

export default function Topbar() {
    const [isArtbookDropdownOpen, setIsArtbookDropdownOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handlers
    useEffect(() => {

        // Click anywhere outside the dropdown to close it
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsArtbookDropdownOpen(false);
            }
        }

        // Scroll handler to make nav part of the topbar 'sticky'
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
        <div className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="topbar-text">
                <div className="topbar-title" style={SpellingSaltFont.style} >Victor Alves</div>
                <div className="topbar-divider">
                    <Image src={topbarDivider} alt="divider"/>
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
                        <Image src={DropDownArrow} alt="dropdown arrow"/>
                    </div>
                    <ArtbookDropdown active={isArtbookDropdownOpen}/>
                </div>
                <a href="/about">About Me</a>
            </div>
        </div>
    );
}