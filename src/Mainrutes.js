import React from 'react'
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import Ahmedabad1 from '../src/assets/image/ahemedabad/ROYAL VILLA AD...jpg'
import lichivilla1 from '../src/assets/image/lonavala/Lichi Villa.jpg'

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
                    Address: "Suyog Apt, Besides, nr. Zebar school, Thaltej, Ahmedabad, Gujarat 380058",
                    Mobile_no: "90819 26237",
                    location: 'https://www.google.com/maps/dir//Royal+Villa,+Suyog+Apt,+Besides,+nr.+Zebar+school,+Thaltej,+Ahmedabad,+Gujarat+380058/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e9b4bc72e2ee9:0x4b1c673125815726?sa=X&ved=2ahUKEwiqj9rHsOeDAxX_s1YBHYSAATkQ48ADegQIBBAA',
                },
            ],
            id: 2,
            type: "Lonavala",
            items: [
                {
                    id: 1,
                    Farm_name: "Lichi Villa",
                    Farm_image: lichivilla1,
                    Mobile_no: "90819 26237",
                },
                {
                    id: 1,
                    Farm_name: "Royal Villa",
                    Farm_image: Ahmedabad1,
                    Address: "Narayani Dham Road Lonavla, Maharashtra 410401 India",
                    Mobile_no: "83800 00958",
                    location: '',
                },
            ]
        
        }

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
            <div className="row mt-4">
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
            </div >
        </div >
    )
}

export default Mainrutes;