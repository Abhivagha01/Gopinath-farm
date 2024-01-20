import React from 'react'
import p1 from '../../src/assets/image/premium villa/3bhk Ac room AD farm la velukla.jpg'
import p2 from '../../src/assets/image/premium villa/Avadh -ankur villa common swimming pool.jpg'
import p3 from '../../src/assets/image/premium villa/Avadh kimbreli luxury villa 5bhk.jpg'
import p4 from '../../src/assets/image/premium villa/Blue farm 3bhk.jpg'
import p5 from '../../src/assets/image/premium villa/Charmig Homes dums.jpg'
import p6 from '../../src/assets/image/premium villa/Daman 5Bhk villa.jpg'
import p7 from '../../src/assets/image/premium villa/Holiday villa RD.jpg'
import p8 from '../../src/assets/image/premium villa/Kkb Surat.jpg'
import p9 from '../../src/assets/image/premium villa/sawarvilla.jpg'
import '../../src/App.css'

function Premimumvilla() {
    const premiumvilla = [
        {
            id: 1,
            type: "Premiumvilla",
            items: [
                {
                    id: 1,
                    Farm_name: "Anghan Farm",
                    Farm_image: p1,
                    Mobile_no: "90819 26237",
                    city: "Kim"
                },
                {
                    id: 2,
                    Farm_name: "Avadh -Ankur villa common swimming pool",
                    Farm_image: p2,
                    Mobile_no: "90819 26237",
                    city: "Palsana"
                },
                {
                    id: 3,
                    Farm_name: "Avadh Kimbreli Luxury Villa 5bhk",
                    Farm_image: p3,
                    Mobile_no: "90819 26237",
                    city: "Palsana"
                },
                {
                    id: 4,
                    Farm_name: "Blue Farm 3bhk",
                    Farm_image: p4,
                    Mobile_no: "90819 26237",
                    city: "Kamrej"
                },
                {
                    id: 5,
                    Farm_name: "Charmig Homes Dumas",
                    Farm_image: p5,
                    Mobile_no: "90819 26237",
                    city: "Dumas"
                },
                {
                    id: 6,
                    Farm_name: "Daman 5Bhk villa",
                    Farm_image: p6,
                    Mobile_no: "90819 26237",
                    city: "Daman"
                },
                {
                    id: 7,
                    Farm_name: "Holiday villa RD",
                    Farm_image: p7,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 8,
                    Farm_name: "Kkb Surat",
                    Farm_image: p8,
                    Mobile_no: "90819 26237",
                    city: "Surat"
                },
                {
                    id: 9,
                    Farm_name: "awarvilla",
                    Farm_image: p9,
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
            <div className='main-wrapper'>
                <div className="container">
                    <div className="farm-item  my-2">
                        {premiumvilla.map((farmType) => (
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
        </div>
    )
}

export default Premimumvilla