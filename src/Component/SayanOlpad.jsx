import React from 'react'
import so1 from '../assets/image/sayan-olpad/Hari villa.jpg'
import so2 from '../assets/image/sayan-olpad/JANKI VILLA.jpg'
import so3 from '../assets/image/sayan-olpad/jemisvilla.jpg'
import so4 from '../assets/image/sayan-olpad/Ladali villa.jpg'
import so5 from '../assets/image/sayan-olpad/lily farm house.jpg'
import so6 from '../assets/image/sayan-olpad/Moghiba farm house.jpg'
import so7 from '../assets/image/sayan-olpad/Olivia farm olpad sayan.jpg'
import so8 from '../assets/image/sayan-olpad/Sillvar villa.jpg'
import so9 from '../assets/image/sayan-olpad/SOMAY VIILA.jpg'
import so10 from '../assets/image/sayan-olpad/STREET Villa.jpg'
import so11 from '../assets/image/sayan-olpad/The retrica MT villa.jpg'
import so12 from '../assets/image/sayan-olpad/Varni farm.jpg'
import so13 from '../assets/image/sayan-olpad/Wood VILLA OF OLPAD.jpg'


function SayanOlpad() {
  const SayanOlpad = [
    {
      id: 1,
      Farm_name: "Hari villa",
      Farm_image: so1,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 2,
      Farm_name: "Janki Villa",
      Farm_image: so2,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 3,
      Farm_name: "Jemish Villa",
      Farm_image: so3,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 4,
      Farm_name: "Ladali villa",
      Farm_image: so4,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 5,
      Farm_name: "Lily Farm House",
      Farm_image: so5,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 6,
      Farm_name: "Moghiba Farm House",
      Farm_image: so6,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 7,
      Farm_name: "Olivia Farm ",
      Farm_image: so7,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 8,
      Farm_name: "Sillvar villa",
      Farm_image: so8,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 9,
      Farm_name: "Somay Villa",
      Farm_image: so9,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 10,
      Farm_name: "Street Villa",
      Farm_image: so10,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 11,
      Farm_name: "The Retrica MT villa",
      Farm_image: so11,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 12,
      Farm_name: "Varni Farm",
      Farm_image: so12,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    },
    {
      id: 13,
      Farm_name: "Wood Villa",
      Farm_image: so13,
      Mobile_no: "90819 26237",
      city: "Sayan Villa & Olpad"
    }
  ]

  function sendWhatsAppMessage(name, address, mobileNumber) {
    const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

    window.open(whatsappMessage, '_blank');
  }

  const renderedFarms = SayanOlpad.map(farm => (
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

export default SayanOlpad