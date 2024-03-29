import React from 'react'
import Raja1 from '../../src/assets/image/rajasthan/RJ hors villa.jpg'


function Rajasthan() {

  const Rajasthan = [
    {
      id: 1,
      Farm_name: "RJ hors villa",
      Farm_image: Raja1,
      Mobile_no: "90819 26237",
      city: "Rajasthan"
    }
  ]




  function sendWhatsAppMessage(name, address, mobileNumber) {
    const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

    window.open(whatsappMessage, '_blank');
  }

  const renderedFarms = Rajasthan.map(farm => (
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

export default Rajasthan