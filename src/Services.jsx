import React from 'react'

const services = [
    {
        icon: '🦻',
        title: 'Ear Drum Repair',
        desc: 'At vero eos et accusamus et iusto odio ducimus qui deleniti atque corrupti quos dolores et quas excepturi.'
    },
    {
        icon: '🤧',
        title: 'Sinus Problems',
        desc: 'At vero eos et accusamus et iusto odio ducimus qui deleniti atque corrupti quos dolores et quas excepturi.'
    },
    {
        icon: '🗣️',
        title: 'Throat Cancer',
        desc: 'At vero eos et accusamus et iusto odio ducimus qui deleniti atque corrupti quos dolores et quas excepturi.'
    },
    {
        icon: '👃',
        title: 'Nasal Polyp',
        desc: 'At vero eos et accusamus et iusto odio ducimus qui deleniti atque corrupti quos dolores et quas excepturi.'
    }
];

const Services = () => {
    return (
        <div className='w-full'>
            <section className='w-full max-w-[1400px] mx-auto pt-60 flex flex-col items-center'>
                <div className='mb-6'>
                    <span className='px-6 py-2 bg-white rounded-xl shadow text-[#01bdb2] font-semibold text-lg'>OUR SPECIALITY</span>
                </div>
                <h2 className='text-4xl font-bold text-[var(--trend-color)] mb-10 text-center'>Why Choose Us</h2>
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