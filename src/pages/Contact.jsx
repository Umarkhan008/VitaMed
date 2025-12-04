import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import vid from "../../public/assets/prewiev.mp4"

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Banner */}
      <div className=" text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="inline-block px-4 py-2 rounded-full bg-[#f0fffd] text-teal-500 font-semibold text-xl mb-4 shadow-sm">Bog'lanish</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Contact Info + Video */}
          <div className="space-y-6">
            {/* Video Placeholder */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center">
              <video src={vid} autoPlay loop muted className="w-full h-full object-cover"></video>
            </div>

            {/* Contact Info Cards - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg border-l-4 border-teal-600">
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="text-teal-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 text-sm">Telefon</h3>
                </div>
                <p className="text-gray-700 font-bold text-sm">
                  <a href="tel:+998909010660" className="hover:text-teal-700">+998 90 901 06 60</a>
                </p>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
                </div>
                <p className="text-gray-700 font-bold text-sm">
                  <a href="mailto:info@vitamed.uz" className="hover:text-blue-700">info@vitamed.uz</a>
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg border-l-4 border-cyan-600">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">Manzil</h3>
                  <p className="text-gray-700 text-sm">Qoqon shaxar shoxruxobod kuchasi 4D-uy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map + Hours */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.2655432107107!2d70.9471556302561!3d40.51870735343428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baef0063a02ec1%3A0xa79e2ae2167f3956!2sQoqon%20lor%2024%2F7!5e0!3m2!1sru!2s!4v1764651931895!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VitaMed Klinikasi xaritasi"
              ></iframe>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-5 rounded-xl border border-teal-200">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <FaClock className="text-teal-600 mr-2" />
                Ish vaqtimiz
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Har kuni</span>
                  <span className="font-semibold text-teal-700">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className=" py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Biz ijtimoiy tarmoqlarda</h3>
            <p className="text-gray-600 text-sm">Bizni kuzatib turing va yangiliklar oling</p>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://facebook.com/vitamed" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:shadow-lg transition-all duration-300 border-2 border-teal-500 hover:scale-110">
              <FaFacebook className="text-teal-600 text-2xl" />
            </a>
            <a href="https://instagram.com/vitamed" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:shadow-lg transition-all duration-300 border-2 border-blue-500 hover:scale-110">
              <FaInstagram className="text-blue-600 text-2xl" />
            </a>
            <a href="https://t.me/vitamed" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:shadow-lg transition-all duration-300 border-2 border-cyan-500 hover:scale-110">
              <FaTelegram className="text-cyan-600 text-2xl" />
            </a>
            <a href="https://wa.me/998909010660" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:shadow-lg transition-all duration-300 border-2 border-green-500 hover:scale-110">
              <FaWhatsapp className="text-green-600 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;