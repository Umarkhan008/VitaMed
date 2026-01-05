import React from 'react'

const services = [
    {
        icon: '🦻',
        title: 'Eshitishni protezlash (Phonak)',
        desc: 'Yoshga xos eshitish pasayishi va erta yoshda ortirilgan karlik'
    },
    {
        icon: '🤧',
        title: 'Bolalarda allergiya',
        desc: 'Bolalarda allergiya muammolarini samarali davolash bo\'yicha xizmatlar ko\'rsatamiz.'
    },
    {
        icon: '🗣️',
        title: 'Tomoq muammolari',
        desc: 'Tomoqdagi muamolarni erta aniqlash, diagnostika va kompleks davolash xizmatlari.'
    },
    {
        icon: '👃',
        title: 'Burun poliplari',
        desc: 'Burun poliplarini xavfsiz olib tashlash va qayta paydo bo\'lishining oldini olish.'
    }
];

const Services = () => {
    return (
        <section className=' py-16 sm:py-24'>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center mb-16'>
                    <span className="inline-block px-4 py-2 rounded-full bg-teal-50 text-teal-600 font-semibold mb-4 shadow-sm">
                        XUSUSIYATLARIMIZ
                    </span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142959] leading-tight'>
                        Nima uchun bizni tanlashadi?
                    </h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full'>
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className='group bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2'
                        >
                            <div className='w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:bg-teal-500 group-hover:scale-110 transition-all duration-500'>
                                <span className="group-hover:scale-110 transition-transform duration-500">{service.icon}</span>
                            </div>
                            <h3 className='text-xl sm:text-2xl font-bold text-[#142959] mb-4 group-hover:text-teal-600 transition-colors'>
                                {service.title}
                            </h3>
                            <p className='text-gray-500 text-base leading-relaxed'>
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Services