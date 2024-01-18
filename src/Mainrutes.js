import React from 'react'
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
function Mainrutes() {
    const Farm = [
        {
            id: 1,
            type: "surat",
            items: [
                {
                    id: 1,
                    Farm_name: "Malbar Hill Apartment",
                    Farm_image: "https://lh3.googleusercontent.com/p/AF1QipPAMXTTQFnQL1mWXsr05OFqnbw794mWadiPpJan=w960-h960-n-o-k-v1",
                    Address: "44, Causeway Rd, Merulaxmi Society, Rander, Surat, Gujarat 395005",
                    Mobile_no: "90999 44478",
                    location: 'https://www.google.com/maps/place/Malbar+Hill+Apartment/@21.2137676,72.7957691,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d72.910508!2d21.2197164!4e1!1m6!1m2!1s0x3be04c241b2bffff:0x6a68be9fc0a728d9!2smalabar+hill+surat!2m2!1d72.7983584!2d21.2137469!3m5!1s0x3be04c241b2bffff:0x6a68be9fc0a728d9!8m2!3d21.2137676!4d72.798344!16s%2Fg%2F11bzzyksvd?hl=en&entry=ttu',
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
                                            <button  onClick={() => openLocationInMaps(item.location)} style={{background:"red",border:"none"}}className="btn btn-primary bg-none"><CiLocationOn /></button>
                                            <button  onClick={() => sendWhatsAppMessage(item.Farm_name, item.Address, item.Mobile_no, item.Farm_image)} className="btn btn-success">Book Now</button>
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