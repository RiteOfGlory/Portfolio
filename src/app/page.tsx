import React from "react";

import MainSignature from "@/assets/Home/MainSignature_GoldWords.webp";
import Image from 'next/image';
import './Home.scss';

export default function Home() {

    return (
        <div className="home-wrapper">
            <div className="home-signature">
                <Image src={MainSignature} alt="Victor's Signature" />
            </div>
        </div>
    )
}