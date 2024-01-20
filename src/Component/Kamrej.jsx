import React from 'react'
import k1 from '../assets/image/kamrej/Anghan farm.jpg'
import k2 from '../assets/image/kamrej/angleparivilla.jpg'
import k3 from '../assets/image/kamrej/Blue farm 3bhk.jpg'
import k4 from '../assets/image/kamrej/Castilo villa.jpg'
import k5 from '../assets/image/kamrej//Daisy villa.jpg'
import k6 from '../assets/image/kamrej/Dreem villa.jpg'
import k7 from '../assets/image/kamrej/Green villa.jpg'
import k8 from '../assets/image/kamrej/Holiday home (kosmada) supab.jpg'
import k9 from '../assets/image/kamrej/KESAR VILLA.jpg'
import k10 from '../assets/image/kamrej/Milon farm.jpg'
import k11 from '../assets/image/kamrej/Ronak villa.jpg'
import k12 from '../assets/image/kamrej/royalrb.jpg'
import k13 from '../assets/image/kamrej/SAVAN VILLA.jpg'
import k14 from '../assets/image/kamrej/savarv viila.jpg'
import k15 from '../assets/image/kamrej/Savera villa.jpg'
import k16 from '../assets/image/kamrej/Shubh nivas farm house.jpg'
import k17 from '../assets/image/kamrej/SIYA VILLAGE.jpg'
import k18 from '../assets/image/kamrej/Sky villa.jpg'
import k19 from '../assets/image/kamrej/Tej villa  (sevni-1).jpg'
import k20 from '../assets/image/kamrej/what roj.jpg'
function Kamrej() {
  const Kamrej = [
    {
      id: 1,
      Farm_name: "Anghan Farm",
      Farm_image: k1,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 2,
      Farm_name: "AanglePari Villa",
      Farm_image: k2,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 3,
      Farm_name: "Blue Farm 3bhk",
      Farm_image: k3,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 4,
      Farm_name: "Castilo villa",
      Farm_image: k4,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 5,
      Farm_name: "Daisy villa",
      Farm_image: k5,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 6,
      Farm_name: "Dreem villa",
      Farm_image: k6,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 7,
      Farm_name: "Green villa",
      Farm_image: k7,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 8,
      Farm_name: "Holiday home",
      Farm_image: k8,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 9,
      Farm_name: "Kesar Villa",
      Farm_image: k9,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 10,
      Farm_name: "Milon farm",
      Farm_image: k10,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 11,
      Farm_name: "Ronak villa",
      Farm_image: k11,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 12,
      Farm_name: "Royal Rb",
      Farm_image: k12,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 13,
      Farm_name: "Sayan Villa",
      Farm_image: k13,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 14,
      Farm_name: "Savarv viila",
      Farm_image: k14,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 15,
      Farm_name: "Savera villa",
      Farm_image: k15,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 16,
      Farm_name: "Shubh nivas farm house",
      Farm_image: k16,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 17,
      Farm_name: "Siya Village",
      Farm_image: k17,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 18,
      Farm_name: "Sky villa",
      Farm_image: k18,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 19,
      Farm_name: "Tej villa",
      Farm_image: k19,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  {
      id: 20,
      Farm_name: "What roj",
      Farm_image: k20,
      Mobile_no: "90819 26237",
      city: "Kamrej"
  },
  ]


function sendWhatsAppMessage(name, address, mobileNumber) {
const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

window.open(whatsappMessage, '_blank');
}

const renderedFarms = Kamrej.map(farm => (
<div key={farm.id} className="item">
  <div className="item-inner">
    <div className="image-block">
      <img src={farm.Farm_image} alt="farm" />
    </div>
    <div className="farm-name">{farm.Farm_name}</div>
    <div className="farm-button d-flex justify-content-between align-items-center">
      <div className="location">
        <i className="fas fa-globe"></i>
        {farm.city}
      </div>
      <div className="booknow" onClick={() => sendWhatsAppMessage(farm.Farm_name, farm.city, farm.Mobile_no)}>
        <i className="fas fa-bookmark"></i>
        Book Now
      </div>
    </div>
  </div>
</div>
));
  return (
      <div>
      <div className='main-wrapper'>
        <div className="container">
          <div className="farm-item my-2">
          {renderedFarms}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kamrej