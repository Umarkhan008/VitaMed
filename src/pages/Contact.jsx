import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTelegram, FaWhatsapp, FaTimes } from 'react-icons/fa';
import vid from "/assets/prewiev.mp4"
import PageHeader from '../PageHeader.jsx';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <div id="contact" className="min-h-screen w-full bg-slate-50 font-sans">
        <div className="pt-12 pb-6">
          <div className="container mx-auto px-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-5 py-2 rounded-full bg-white text-teal-600 font-bold tracking-widest text-xs uppercase shadow-sm border border-teal-100"
            >
              Bog'lanish
            </motion.span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* Left: Contact Info + Video */}
            <div className="space-y-8">
              {/* Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 aspect-video flex items-center justify-center cursor-pointer group relative border border-white/50"
              >
                <video src={vid} autoPlay loop muted className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></video>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-300" onClick={openVideoModal}>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-6 cursor-pointer border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info Cards - Compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-teal-100 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <h3 className="font-bold text-slate-800 font-outfit">Telefon</h3>
                  </div>
                  <p className="text-slate-600 font-medium ml-13">
                    <a href="tel:+998909010660" className="hover:text-teal-600 transition-colors text-lg">+998 90 901 06 60</a>
                  </p>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-blue-100 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <h3 className="font-bold text-slate-800 font-outfit">Email</h3>
                  </div>
                  <p className="text-slate-600 font-medium ml-13">
                    <a href="mailto:info@vitamed.uz" className="hover:text-blue-600 transition-colors text-lg">info@vitamed.uz</a>
                  </p>
                </motion.div>
              </div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-cyan-100 transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mr-4 flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors mt-1">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 font-outfit mb-1">Manzil</h3>
                    <p className="text-slate-600 font-medium">Qo'qon shahar, Shohruxobod 4D</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Map + Hours */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden h-80 lg:h-[400px] border border-slate-100"
              >
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
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-teal-500 to-teal-600 p-8 rounded-3xl shadow-xl shadow-teal-500/20 text-white"
              >
                <h3 className="font-bold font-outfit text-xl mb-6 flex items-center">
                  <FaClock className="text-teal-200 mr-3 text-2xl" />
                  Ish Vaqtimiz
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-lg border-b border-teal-400/30 pb-4">
                    <span className="text-teal-50">Dushanba - Yakshanba</span>
                    <span className="font-bold bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">24/7</span>
                  </div>
                  <p className="text-teal-100 text-sm mt-4 text-center">
                    Biz sizning sog'lig'ingiz uchun har doim ochiqmiz!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold font-outfit text-slate-800 mb-3">Biz ijtimoiy tarmoqlarda</h3>
              <p className="text-slate-500 max-w-md mx-auto">Bizni kuzatib turing, foydali maslahatlar va yangiliklardan boxabar bo'ling</p>
            </div>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { icon: FaFacebook, color: "text-blue-600", border: "hover:border-blue-500", bg: "hover:shadow-blue-500/20", href: "https://facebook.com/vitamed" },
                { icon: FaInstagram, color: "text-pink-600", border: "hover:border-pink-500", bg: "hover:shadow-pink-500/20", href: "https://www.instagram.com/lor_otajon/" },
                { icon: FaTelegram, color: "text-sky-500", border: "hover:border-sky-500", bg: "hover:shadow-sky-500/20", href: "https://t.me/qoqonlor" },
                { icon: FaWhatsapp, color: "text-green-500", border: "hover:border-green-500", bg: "hover:shadow-green-500/20", href: "https://wa.me/998909010660" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border-2 border-transparent transition-all duration-300 hover:scale-110 ${social.border} ${social.bg}`}
                >
                  <social.icon className={`${social.color} text-3xl`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <video
                  src={vid}
                  autoPlay
                  loop
                  controls
                  className="w-full h-auto max-h-[80vh] bg-black"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;