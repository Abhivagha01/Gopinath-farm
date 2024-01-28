import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import s1 from '../../src/assets/image/adajan dandi/Ankur villa 3bhk.jpg'
import s2 from '../../src/assets/image/ahemedabad/AD Royal villa.jpg'
import s3 from '../../src/assets/image/high/Avadh kimbreli luxury villa 5bhk.jpg'
import s4 from '../../src/assets/image/kamrej/Daisy villa.jpg'
import s5 from '../../src/assets/image/lonavala/Dilux villa.jpg'
import s6 from '../../src/assets/image//mahableswar/Stobery villa.jpg'
import s7 from '../../src/assets/image/medium budget/Castilo villa.jpg'
import s8 from '../../src/assets/image/navsari/Vala farm house B.jpg'
import s9 from '../../src/assets/image/palsana/Gopi farm adajan.jpg'
import s10 from '../../src/assets/image/premium villa/Avadh kimbreli luxury villa 5bhk.jpg'
import s11 from '../../src/assets/image/rajasthan/RJ hors villa.jpg'
import s12 from '../../src/assets/image/saputara/tent City saputara.jpg'
import s13 from '../../src/assets/image/sayan-olpad/Ladali villa.jpg'
import s14 from '../../src/assets/image/wada/kavya villa wada.jpg'
import { Link } from 'react-router-dom';
import social1 from '../assets/image/social/facebook.png'
import social2 from '../assets/image/social/instagram.png'
import social3 from '../assets/image/social/s1.png'
import social4 from '../assets/image/social/s2.png'
import social5 from '../assets/image/social/s3.png'
import social6 from '../assets/image/social/s4.png'
import mediumvilla from '../../src/assets/image/medium budget/Ankur villa 3bhk.jpg'
import premiumvilla from '../assets/image/premium villa/Holiday villa RD.jpg'
import highvilla from '../assets/image/high/Shubh nivas farm house.jpg'
import ahemedabad from '../../src/assets/image/ahemedabad/AD Royal villa.jpg'
import lonavala from '../assets/image/lonavala/Seeya villa.jpg'
import adajandandi from '../assets/image/adajan dandi/LEMON VILLA.jpg'
import mahabaleswar from '../assets/image/mahableswar/Stobery villa.jpg'
import navsari from '../assets/image/navsari/Drim villa Navsari.jpg'
import rajasthan from '../assets/image/rajasthan/RJ hors villa.jpg'
import saputara from '../assets/image/saputara/tent City saputara.jpg'
import wada from '../assets/image/wada/kavya villa wada.jpg'
import surat from '../assets/image/kamrej/Shubh nivas farm house.jpg'
function Home() {

  const Imagearray = [
    { image: s1 }, { image: s2 }, { image: s3 }, { image: s4 }, { image: s5 },
    { image: s6 }, { image: s7 }, { image: s8 }, { image: s8 }, { image: s9 },
    { image: s10 }, { image: s11 }, { image: s12 }, { image: s13 }, { image: s14 }
  ];

  const slider = {
    loop: true,
    margin: 10,
    nav: false,
    lazyLoad: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }
  return (
    <div>
        <div className="slider">
          <div className="image">
            <OwlCarousel className='owl-theme' loop margin={10} nav {...slider}>
              {Imagearray.map((item, index) => (
                <div className="slide-block">
                  <img key={index} src={item.image} alt="Slider_image" />
                </div>
              ))}
            </OwlCarousel>

          </div>

        </div>

        <div className="social-outer">
          <div className="container">
            <div className="social-inner">
              <div className="social-icon m-2">
                <ul className='d-flex  justify-content-center'>
                  <li className='mx-2 my-2'>
                    <Link to="https://www.facebook.com/people/Gopinathji-Farm-Surat/100091930071316/?mibextid=ZbWKwL">
                      <img src={social1} alt="facebook" />
                    </Link>
                  </li>
                  <li className='mx-2 my-2'>
                    <Link to="https://www.instagram.com/gopinathji_farm_?igshid=NTc4MTIwNjQ2YQ%3D%3D">
                      <img src={social2} alt="instagram" />
                    </Link>
                  </li>
                  <li className='mx-2 my-2'>
                    <Link to="mailto:farmsurat4@gmail.com">
                      <img src={social3} alt="email" />
                    </Link>
                  </li>
                  <li className='mx-2 my-2'>
                    <Link to="tel:+91 90819 26237">
                      <img src={social4} alt="call" />
                    </Link>
                  </li>
                  <li className='mx-2 my-2'>
                    <Link to="https://wa.me/9081926237">
                      <img src={social5} alt="watshapp" />
                    </Link>
                  </li>
                  <li className='mx-2 my-2'>
                    <Link to="https://maps.app.goo.gl/jDCnCEgdSdEJrztt8">
                      <img src={social6} alt="location" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="social-item">
                <div className="item d-flex align-items-center justify-content-flex-start mb-2">
                  <div className="icon">  <i class="fas fa-map-marker-alt mb-2"></i></div>
                  <div className="text">G-4 Hilton Business centre,new katargam ,variyav road surat-395006.</div>
                </div>
                <div className="item d-flex  align-items-center justify-content-flex-start mb-2">
                  <div className="icon">  <i class="fas fa-phone"></i></div>
                  <div className="text"><Link to="tel:+91 90819 26237">+91 90819 26237</Link></div>
                </div>
                <div className="item d-flex  align-items-center justify-content-flex-start mb-2">
                  <div className="icon"> <i class="fas fa-envelope"></i></div>
                  <div className="text"><Link to="mailto:farmsurat4@gmail.com">farmsurat4@gmail.com</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="term-outer">
          <div className="container">
            <div className="term-inner">
              <div className="section-title">
                <div class="flag-discount">Term  & Condition</div>
              </div>
              <div className="term-content">
                <ol className='my-3'>
                  <li>*50% પેમેન્ટ એડવાન્સ આપવાનું રહેશે અને બાકી  50% બોલિંગ ના આગળના દિવસે આપવાનું રહશે</li>
                  <li>*લાઈટ બેકઅપ સુવિધા ન હોવાથી લાઈટ જશે તો પેમેન્ટ રિટન કરવામાં આવશે નહીં*</li>
                  <li>*આઇડી પ્રૂફ ફરજીયાત મોકવું.*</li>
                  <li>*બુકિંગ કેન્સલ કરશો તો એડવાન્સ પેમેન્ટ રીટર્ન મળશે નહિ.*</li>
                  <li>કોઈ પણ નુકસાન થશે તો અલગ ચાર્જ લેવામાં આવશે.</li>
                  <li>ગાર્ડનમાં  ફુલ કે પાન</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="farm-outer">
          <div className="container">
            <div className="section-title">
              <div class="flag-discount">Our Farms</div>
            </div>
            <div className="farm-item d-flex flex-wrap my-2">
              <Link to="/ahemedabad">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={ahemedabad} alt="ahemedabad-farmfarm" />
                    </div>
                    <div className="farm-name">AD Royal villa <span><i className="fas fa-map-marker-alt"></i>Ahemedabad</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/lonavala">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={lonavala} alt="lonavala-farmfarm" />
                    </div>
                    <div className="farm-name">Seeya villa <span><i className="fas fa-map-marker-alt"></i>Lonavala</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/adajandandi">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={adajandandi} alt="adajandandi-farmfarm" />
                    </div>
                    <div className="farm-name">Lemon Villa <span><i className="fas fa-map-marker-alt"></i>Adajan & Dandi</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/mahabaleswar">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={mahabaleswar} alt="mahabaleswar-farmfarm" />
                    </div>
                    <div className="farm-name">Stobery  Villa <span><i className="fas fa-map-marker-alt"></i>Mahabaleshwar</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/navsari">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={navsari} alt="navsari-farmfarm" />
                    </div>
                    <div className="farm-name">Dream  Villa <span><i className="fas fa-map-marker-alt"></i>Navasari</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/rajasthan">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={rajasthan} alt="rajasthan-farmfarm" />
                    </div>
                    <div className="farm-name">RJ hors villa <span><i className="fas fa-map-marker-alt"></i>Rajasthan</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/saputara">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={saputara} alt="saputara-farmfarm" />
                    </div>
                    <div className="farm-name">Tent City  <span> <i className="fas fa-map-marker-alt"></i>Saputara</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/wada">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={wada} alt="wada-farmfarm" />
                    </div>
                    <div className="farm-name">Kavya Villa <span><i className="fas fa-map-marker-alt"></i>Wada</span></div>
                  </div>
                </div>
              </Link>
              <Link to="/surat">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={surat} alt="surat-farmfarm" />
                    </div>
                    <div className="farm-name">Shubh nivas farm house <span><i className="fas fa-map-marker-alt"></i>Surat</span></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="farm-outer">
          <div className="container">
            <div className="section-title">
              <div class="flag-discount">Our Premium Villa</div>
            </div>
            <div className="farm-item d-flex flex-wrap my-2">
              <Link to="/premiumvilla">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={premiumvilla} alt="premiumvilla-farmfarm" />
                    </div>
                    <div className="farm-name">Holiday villa RD</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="farm-outer">
          <div className="container">
            <div className="section-title">
              <div class="flag-discount">Our High Villa</div>
            </div>
            <div className="farm-item d-flex flex-wrap my-2">
              <Link to="/highvilla">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={highvilla} alt="highvilla-farmfarm" />
                    </div>
                    <div className="farm-name">Shubh Nivas farm house <span><i class="fas fa-coins" style={{color:'yellow'}}></i>5k to 7k+</span></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="farm-outer">
          <div className="container">
            <div className="section-title">
              <div class="flag-discount">Our Medium Villa</div>
            </div>
            <div className="farm-item d-flex flex-wrap my-2">
              <Link to="/mediumvilla">
                <div className="item">
                  <div className="item-inner">
                    <div className="image-block">
                      <img src={mediumvilla} alt="medium-farmfarm" />
                    </div>
                    <div className="farm-name">Ankur Villa 3bhk <span><i class="fas fa-coins" style={{color:'yellow'}}></i>4k+</span></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Home