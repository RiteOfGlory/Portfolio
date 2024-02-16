import React from "react";

import MainSignature from "../pages/home/assets/MainSignature_GoldWords.webp";
import './Home.scss';

export default function Home() {

    return (
        <div className="home-wrapper">
            <div className="home-signature">
                <img src={MainSignature} alt="Rite Of Glory"/>
            </div>
        </div>
    )
}