import React from 'react'
import { Link } from 'react-router-dom'
import Inquiry from '../Component/Inquiry'

function Footer() {
    return (
        <div>
            <div className="farm-outer">
                <div className="container">
                    <div className="section-title">
                        <div class="flag-discount">Inquiry Now</div>
                    </div>
                    <Inquiry />
                </div>
            </div>
            <div className="footer-top">

                <span><Link to="/ahemedabad">Ahemedabad |</Link></span>
                <span><Link to="lonavala">Lonavala |</Link></span>
                <span><Link to="/adajandandi">Adajan&Dandi |</Link></span>
                <span><Link to="mahabaleswar">Mahabaleswar |</Link></span>
                <span><Link to="/navsari">Navsari</Link>|</span>
                <span><Link to="/rajasthan">Rajasthan</Link> |</span>
                <span><Link to="/saputara">Saputara</Link> |</span>
                <span><Link to="/wada">Wada</Link> |</span>
                <span><Link to="/surat">Surat</Link> |</span>
                <span><Link to="/kamrej">kamrej</Link> |</span>
                <span><Link to="/palsana">Palsana</Link> |</span>
                <span><Link to="/sayanolpad">Sayan&Olpad</Link> </span>
                <span><Link to="/premiumvilla">Premium villa |</Link></span>
                <span><Link to="/premiumvilla">Premium villa |</Link></span>
                <span><Link to="/mediumvilla">/Medium villa </Link></span>
            </div>
            <div className="footer-bottom text-center">
                @2023 Gopinathji Farm House.All right  reserved.
            </div>
        </div>
    )
}

export default Footer