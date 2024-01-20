import React from 'react'
import Lonavala1 from '../../src/assets/image/lonavala/Lichi Villa.jpg'
import Lonavala2 from '../../src/assets/image/lonavala/Dilux villa.jpg'
import Lonavala3 from '../../src/assets/image/lonavala/Lonavala Tha prism villa.jpg'
import Lonavala4 from '../../src/assets/image/lonavala/Lonavala villa 123.jpg'
import Lonavala5 from '../../src/assets/image/lonavala/Seeya villa.jpg'

function Lonaval() {

  const Lonavala = [
    {
      id: 1,
      Farm_name: "Lichi Villa",
      Farm_image: Lonavala1,
      Mobile_no: "90819 26237",
      city: "Lonavala"
    },
    {
      id: 2,
      Farm_name: "Dilux villa",
      Farm_image: Lonavala2,
      Mobile_no: "90819 26237",
      city: "Lonavala"
    },
    {
      id: 3,
      Farm_name: "Lonavala Tha prism villa",
      Farm_image: Lonavala3,
      Mobile_no: "90819 26237",
      city: "Lonavala"
    },
    {
      id: 4,
      Farm_name: "Lonavala villa 123",
      Farm_image: Lonavala4,
      Mobile_no: "90819 26237",
      city: "Lonavala"
    },
    {
      id: 5,
      Farm_name: "Seeya villa",
      Farm_image: Lonavala5,
      Mobile_no: "90819 26237",
      city: "Lonavala"
    }
  ]

  function sendWhatsAppMessage(name, address, mobileNumber) {
    const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

    window.open(whatsappMessage, '_blank');
  }

  const renderedFarms = Lonavala.map(farm => (
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

export default Lonaval