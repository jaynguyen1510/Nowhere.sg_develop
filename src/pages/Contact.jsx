import React from 'react';
import Title from '../components/Title';
import contactImage from '../assets/contact_logo.jpg';
import NewLetterBox from '../components/NewLetterBox';

const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 border-t">
                <Title secondaryText={`CONTACT`} primaryText={`US`} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[480px] shadow-md rounded-lg" src={contactImage} alt="Contact" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-xl text-red-800">Our Store</p>
                    <p className="text-gray-700">
                        34/7 Ấp 4 Vạn Hạnh <br /> X.Trung Chánh, H. Hóc Môn <br /> TP.HCM
                    </p>
                    <p className="text-gray-500">
                        <span className="text-red-800 p-1">PHONE:</span> (+84) 362464361 <br />
                        <span className="text-red-800 p-1">EMAIL:</span> ngnhatnam1510@gmail.com
                    </p>
                </div>
            </div>
            {/* <div className="w-full md:max-w-[600px] h-64 mx-auto mb-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.7166317106526!2d106.61327539585429!3d10.866392969792082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a11175cbc23%3A0xb8a419adcf0eaa34!2zMzMvOCBELiBW4bqhbiBI4bqhbmggMywgVHJ1bmcgTeG7uSBUw6J5LCBIw7NjIE3DtG4sIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1743611327713!5m2!1svi!2s"
                    className="w-full h-full rounded-md shadow-md"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store Location"
                ></iframe>
            </div> */}

            <NewLetterBox />
        </div>
    );
};

export default Contact;
