import React from 'react'
import Ahmedabad1 from '../src/assets/image/ahemedabad/ROYAL VILLA AD...jpg'
import Lonavala1 from '../src/assets/image/lonavala/Lichi Villa.jpg'
import Lonavala2 from '../src/assets/image/lonavala/Dilux villa.jpg'
import Lonavala3 from '../src/assets/image/lonavala/Lonavala Tha prism villa.jpg'
import Lonavala4 from '../src/assets/image/lonavala/Lonavala villa 123.jpg'
import Lonavala5 from '../src/assets/image/lonavala/Seeya villa.jpg'
import Ad1 from '../src/assets/image/adajan dandi/Ankur villa 3bhk.jpg'
import Ad2 from '../src/assets/image/adajan dandi/LEMON VILLA.jpg'
import Ad3 from '../src/assets/image/adajan dandi/Pal villa. Dandi rod.jpg'
import maha1 from '../src/assets/image/mahableswar/Stobery villa.jpg'
import nava1 from '../src/assets/image/navsari/Drim villa Navsari.jpg'
import nava2 from '../src/assets/image/navsari/valafarmhouse1.jpg'
import nava3 from '../src/assets/image/navsari/Vala farm house B.jpg'
import Raja1 from '../src/assets/image/rajasthan/RJ hors villa.jpg'
import sapu1 from '../src/assets/image/saputara/tent City saputara.jpg'
import sapu2 from '../src/assets/image/saputara/Vanvaso saputara.jpg'
import wada1 from '../src/assets/image/wada/kavya villa wada.jpg'
import './App.css'

function Mainrutes() {
    const Farm = [
        {
            id: 1,
            type: "Ahmedabad",
            items: [
                {
                    id: 1,
                    Farm_name: "Royal Villa",
                    Farm_image: Ahmedabad1,
                    Mobile_no: "90819 26237",
                    city: "Ahmedabad"
                },
            ],
        },
        {
            id: 2,
            type: "Lonavala",
            items: [
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
                },
            ]
        },
        {
            id: 3,
            type: "Adajan & Dandi",
            items: [
                {
                    id: 1,
                    Farm_name: "Ankur villa 3bhk",
                    Farm_image: Ad1,
                    Mobile_no: "90819 26237",
                    city: "Adajan & Dandi"
                },
                {
                    id: 2,
                    Farm_name: "Lemon Villa",
                    Farm_image: Ad2,
                    Mobile_no: "90819 26237",
                    city: "Adajan & Dandi"
                },
                {
                    id: 3,
                    Farm_name: "Pal villa",
                    Farm_image: Ad3,
                    Mobile_no: "90819 26237",
                    city: "Adajan & Dandi"
                },
            ],
        },
        {
            id: 4,
            type: "Mahabaleshwar",
            items: [
                {
                    id: 1,
                    Farm_name: "Stobery villa",
                    Farm_image: maha1,
                    Mobile_no: "90819 26237",
                    city: "Mahabaleshwar"
                },
            ],
        },
        {
            id: 5,
            type: "Navasari",
            items: [
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
            ],
        },
        {
            id: 6,
            type: "Rajasthan",
            items: [
                {
                    id: 1,
                    Farm_name: "RJ hors villa",
                    Farm_image: Raja1,
                    Mobile_no: "90819 26237",
                    city: "Rajasthan"
                },
            ],
        },
        {
            id: 7,
            type: "Rajasthan",
            items: [
                {
                    id: 1,
                    Farm_name: "RJ hors villa",
                    Farm_image: Raja1,
                    Mobile_no: "90819 26237",
                    city: "Rajasthan"
                },
            ],
        },
        {
            id: 8,
            type: "Saputara",
            items: [
                {
                    id: 1,
                    Farm_name: "Tent City saputara ",
                    Farm_image: sapu1,
                    Mobile_no: "90819 26237",
                    city: "Saputara"
                },
                {
                    id: 2,
                    Farm_name: "Vanvaso saputara",
                    Farm_image: sapu2,
                    Mobile_no: "90819 26237",
                    city: "Saputara"
                },
            ],
        },
        {
            id: 9,
            type: "Wada",
            items: [
                {
                    id: 1,
                    Farm_name: "kavya villa wada",
                    Farm_image: wada1,
                    Mobile_no: "90819 26237",
                    city: "wada"
                },
            ],
        },
    ];

    function openLocationInMaps(locationURL) {
        window.open(locationURL, '_blank');
    }
    function sendWhatsAppMessage(name, address, mobileNumber) {
        const whatsappMessage = `https://wa.me/9081926237?text=Booking%20Details%0AName:%20${encodeURIComponent(name)}%0AAddress:%20${encodeURIComponent(address)}%0AMobile%20Number:%20${encodeURIComponent(mobileNumber)}`;

        window.open(whatsappMessage, '_blank');
    }



    return (
        <div>
            {Farm.map((farmType) => (
                <div key={farmType.id} className="item">
                    <div className="item-inner">
                        <div className="image-block">
                            <img src={farmType.items[0].Farm_image} alt="farm" />
                        </div>
                        <div className="farm-name">{farmType.items[0].Farm_name}</div>
                        <div className="farm-button d-flex justify-content-between align-items-center">
                            <div className="location" onClick={() => openLocationInMaps(farmType.items[0].location)}>
                                <i className="fas fa-globe"></i>
                                {farmType.items[0].city}
                            </div>
                            <div className="booknow" onClick={() => sendWhatsAppMessage(farmType.items[0].Farm_name, farmType.items[0].Address, farmType.items[0].Mobile_no)}>
                                <i className="fas fa-bookmark"></i>
                                Book Now
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* <div className="row mt-4">
                {Farm.map((city, cityIndex) => (
                    <div key={cityIndex}>
                        <div className="row mt-4">
                            {city.items.map((item, index) => (
                                <div key={index} className="card col-lg-3 text-center shadow m-auto">
                                    <div className="view overlay">
                                        <img className="card-img-top m-auto" src={item.Farm_image} alt="Cardimagecap" />
                                        <Link to="/">
                                            <div className="mask rgba-white-slight"></div>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">{item.Farm_name}</h4>
                                        <div className="d-lg-flex justify-content-between">
                                            <button onClick={() => openLocationInMaps(item.location)} style={{ background: "red", border: "none" }} className="btn btn-primary bg-none"><CiLocationOn /></button>
                                            <button onClick={() => sendWhatsAppMessage(item.Farm_name, item.Address, item.Mobile_no, item.Farm_image)} className="btn btn-success">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div > */}
        </div >
    )
}

export default Mainrutes;