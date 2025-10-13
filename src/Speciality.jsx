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
        <div className='w-full'>
            <section className='w-full max-w-[1400px] mx-auto py-10 max-lg:pt-20 flex flex-col items-center'>
                <div className='mb-6'>
                    <span className='px-6 py-2 bg-white rounded-xl shadow text-[#01bdb2] font-semibold text-lg'>OUR SPECIALITY</span>
                </div>
                <h2 className='text-4xl font-bold text-[var(--trend-color)] mb-10 text-center'>Nima uchun biz ?</h2>
                <div className='grid w-full max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl px-2 max-lg:px-5 max-lg:gap-6'>
                    {services.map((service, idx) => (
                        <div key={idx} className='bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition'>
                            <div className='text-6xl mb-6 text-[#01bdb2]'>{service.icon}</div>
                            <h3 className='text-2xl font-bold text-[var(--trend-color)] mb-3'>{service.title}</h3>
                            <p className='text-gray-500 text-base'>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}


export default Services