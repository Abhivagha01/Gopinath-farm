import React from 'react'
import h1 from '../../src/assets/image/high/Anghan farm.jpg'
import h2 from '../../src/assets/image/high/Avadh kimbreli luxury villa 5bhk.jpg'
import h3 from '../../src/assets/image/high/Blue farm 3bhk.jpg'
import h4 from '../../src/assets/image/high/Charmig Homes dums.jpg'
import h5 from '../../src/assets/image/high/Dolly villa.jpg'
import h6 from '../../src/assets/image/high/heaven risot tapi River.jpg'
import h7 from '../../src/assets/image/high/Milon farm.jpg'
import h8 from '../../src/assets/image/high/navyavilla.jpg'
import h9 from '../../src/assets/image/high/Rajhans feriado.jpg'
import h10 from '../../src/assets/image/high/Sanaya Villa.jpg'
import h11 from '../../src/assets/image/high/Shubh nivas farm house.jpg'
import h12 from '../../src/assets/image/high/Tej villa  (sevni-1).jpg'
import h13 from '../../src/assets/image/high/Tejendra villa SEVANI.jpg'
import '../../src/App.css'

function Highvilla() {
    const Highvilla = [
        {
            id: 1,
            type: "High Villa",
            items: [
                {
                    id: 1,
                    Farm_name: "Anghan Farm",
                    Farm_image: h1,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 2,
                    Farm_name: "Avadh Kimbreli Luxury Villa 5bhk",
                    Farm_image: h2,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 3,
                    Farm_name: "Blue farm 3bhk 5bhk",
                    Farm_image: h3,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 4,
                    Farm_name: "Charmig Homes Dumas",
                    Farm_image: h4,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 5,
                    Farm_name: "Dolly villa",
                    Farm_image: h5,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 6,
                    Farm_name: "Heaven Risot Tapi River",
                    Farm_image: h6,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 7,
                    Farm_name: "Milon farm",
                    Farm_image: h7,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 8,
                    Farm_name: "Navya Villa",
                    Farm_image: h8,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 9,
                    Farm_name: "Rajhans Feriado",
                    Farm_image: h9,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 10,
                    Farm_name: "Sanaya Villa",
                    Farm_image: h10,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 11,
                    Farm_name: "Shubh nivas Farm House",
                    Farm_image: h11,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 12,
                    Farm_name: "Tej villa",
                    Farm_image: h11,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 12,
                    Farm_name: "Tej villa (sevni)",
                    Farm_image: h12,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 13,
                    Farm_name: "Tejendra villa (Sevni)",
                    Farm_image: h13,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },

            ]
        }
    ]
    function sendWhatsAppMessage(farmName, city, mobileNumber) {
        const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AFarm%20Name:%20${encodeURIComponent(farmName)}%0ACity:%20${encodeURIComponent(city)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

        window.open(whatsappMessage, '_blank');
    }
    return (
        <div>
            <div className="container">
                <div className="farm-items  my-2">
                    {Highvilla.map((farmType) => (
                        farmType.items.map((farm) => (
                            <div key={farm.id} className="item">
                                <div className="item-inner">
                                    <div className="image-block">
                                        <img src={farm.Farm_image} alt="farm" />
                                    </div>
                                    <div className="farm-name">{farm.Farm_name}</div>
                                    <div className="farm-button d-flex justify-content-between align-items-center">
                                        <div className="location" >
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
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Highvilla