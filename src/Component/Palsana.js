import React from 'react'
import pa1 from '../assets/image/palsana/DIAMOND VILLAGE.jpg'
import pa2 from '../assets/image/palsana/Gold paraizo.jpg'
import pa3 from '../assets/image/palsana/Gopi farm adajan.jpg'
import pa4 from '../assets/image/palsana/HAPPY HOMES.jpg'
import pa5 from '../assets/image/palsana/ORENJ VILLA.jpg'
import pa6 from '../assets/image/palsana/Rajhans feriado.jpg'
import pa7 from '../assets/image//palsana/Rajhans.jpg'
import pa8 from '../assets/image/palsana/Sanaya Villa.jpg'
import pa9 from '../assets/image/palsana/SUPPRB.jpg'
import pa10 from '../assets/image/palsana/SUPRIM.jpg'
function Palsana() {

  const Palsana = [
    {
      id: 1,
      Farm_name: "Diamond Village",
      Farm_image: pa1,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 2,
      Farm_name: "Gold paraizo",
      Farm_image: pa2,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 3,
      Farm_name: "Gopi farm ",
      Farm_image: pa3,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 4,
      Farm_name: "Happy Homes",
      Farm_image: pa4,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 5,
      Farm_name: "ORENJ VILLA",
      Farm_image: pa5,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 6,
      Farm_name: "Rajhans feriado",
      Farm_image: pa6,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 7,
      Farm_name: "Rajhans",
      Farm_image: pa7,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 8,
      Farm_name: "Sanaya Villa",
      Farm_image: pa8,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 9,
      Farm_name: "SUPPRB",
      Farm_image: pa9,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
    {
      id: 10,
      Farm_name: "SUPRIM",
      Farm_image: pa10,
      Mobile_no: "90819 26237",
      city: "Palsana"
    },
  ]




  function sendWhatsAppMessage(name, address, mobileNumber) {
    const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

    window.open(whatsappMessage, '_blank');
  }

  const renderedFarms = Palsana.map(farm => (
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
        <div className="container">
          <div className="farm-items my-2">
            {renderedFarms}
          </div>
        </div>
    </div>
  )
}

export default Palsana