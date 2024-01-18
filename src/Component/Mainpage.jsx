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



function Mainpage() {

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
      <div className="main-wrapper">
        <div className="slider">
          <div className="image">
            <OwlCarousel className='owl-theme' loop margin={10} nav {...slider}>
              {Imagearray.map((item, index) => (
                <div className="slide-block">
                  <img key={index} src={item.image} alt={`image-${index + 1}`} />
                </div>
              ))}
            </OwlCarousel>
            <div className="logo">
              <img src="" alt="" />
            </div>
          </div>

        </div>

        <div className="social-outer">
          <div className="container">
            <div className="social-inner">
              <div className="social-item">
                <div className="item d-lg-flex justify-content-flex-start mb-2">
                  <div className="icon">  <i class="fas fa-map-marker-alt"></i></div>
                  <div className="text">Kanbhi, Gujarat 394540, India</div>
                </div>
                <div className="item d-lg-flex justify-content-flex-start mb-2">
                  <div className="icon">  <i class="fas fa-phone"></i></div>
                  <div className="text"><Link to="tel:+91 90819 26237">+91 90819 26237</Link></div>
                </div>
                <div className="item d-lg-flex justify-content-flex-start mb-2">
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
      </div>

    </div>
  )
}

export default Mainpage