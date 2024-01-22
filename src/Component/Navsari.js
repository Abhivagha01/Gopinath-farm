import React from 'react'
import nava1 from '../../src/assets/image/navsari/Drim villa Navsari.jpg'
import nava2 from '../../src/assets/image/navsari/valafarmhouse1.jpg'
import nava3 from '../../src/assets/image/navsari/Vala farm house B.jpg'

function Navsari() {
  const Navasari = [
    {
      id: 1,
      Farm_name: "Drim villa Navsari",
      Farm_image: nava1,
      Mobile_no: "90819 26237",
      city: "Navasari"
    },
    {
      id: 2,
      Farm_name: "Vala Farm House A",
      Farm_image: nava2,
      Mobile_no: "90819 26237",
      city: "Navasari"
    },
    {
      id: 1,
      Farm_name: "Vala's Farm House B",
      Farm_image: nava3,
      Mobile_no: "90819 26237",
      city: "Navasari"
    },
  ]




  function sendWhatsAppMessage(name, address, mobileNumber) {
    const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

    window.open(whatsappMessage, '_blank');
  }

  const renderedFarms = Navasari.map(farm => (
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

export default Navsari