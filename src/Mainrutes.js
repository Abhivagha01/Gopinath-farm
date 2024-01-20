import React from 'react'

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
        {
            id: 10,
            type: "Surat",
            items: [
                {
                    id: 1,
                    Farm_name: "Castilo villa",
                    Farm_image: surat1,
                    Mobile_no: "90819 26237",
                    city: "Surat"
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
           

        </div >
    )
}

export default Mainrutes;