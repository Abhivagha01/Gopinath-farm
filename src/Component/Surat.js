import React from 'react'
import { Link } from 'react-router-dom'
import kamrej from '../assets/image/kamrej/Daisy villa.jpg'
import palsana from '../assets/image/palsana/ORENJ VILLA.jpg'
import sayanolpad from '../assets/image/sayan-olpad/lily farm house.jpg'

function Surat() {
  return (
    <div>
      <div className="container">
        <div className="farm-outer">
          <div className="container">
            <div className="section-title">
              <div class="flag-discount">Our Surat Farms</div>
            </div>
            <div className="farm-item d-flex flex-wrap my-2">
              <Link to="/kamrej">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={kamrej} alt="kamrej-farmfarm" />
                    </div>
                    <div className="farm-name">Daisy villa <span><i className="fas fa-map-marker-alt"></i>Kamrej</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/palsana">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={palsana} alt="palsana-farmfarm" />
                    </div>
                    <div className="farm-name">Orange villa <span><i className="fas fa-map-marker-alt"></i>Palsana</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/sayanolpad">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={sayanolpad} alt="sayanolpad-farmfarm" />
                    </div>
                    <div className="farm-name">Lily farm house Villa <span><i className="fas fa-map-marker-alt"></i>Sayan & Olpad</span></div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Surat