import React from 'react'
import logo from '../public/assets/logo.jpg'
import bgVid from '../public/assets/main-bg4.mp4'
const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
        <div className='w-full'>
            <main className="main  flex flex-col gap-20 w-full max-w-[1400px] mx-auto max-lg:h-[70vh]  max-lg:px-3">
                <video className='h-[800px] max-lg:h-[70vh] object-cover w-[100vw] absolute left-0 z-[-1]' autoPlay loop muted>
                    <source src={bgVid} />
                </video>
                <header className='header w-full bg-white px-8 h-max gap-5 flex flex-col py-4 rounded-xl max-lg:rounded-md max-lg:px-2'>
                    {/* Topbar: faqat desktopda */}
                    <div className="topbar items-center w-full h-max flex justify-between max-lg:hidden">
                        <ul className='flex gap-5 text-[16px] text-gray-600'>
                            <li>A-1, Envanto HQ, Kokand</li>
                            <li>(000) 123456789</li>
                            <li>name@yourmail.com</li>
                        </ul>
                        <div className='flex gap-5'>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                    <nav className="navbar items-center gap-5 justify-between flex relative w-full">
                        <img className='w-[50px] max-lg:w-[40px]' src={logo} alt="Vitamed logo" />
                        {/* Desktop menu */}
                        <ul className='flex gap-10 text-[20px] uppercase text-[var(--trend-color)] max-lg:hidden'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                        {/* Hamburger icon for mobile */}
                        <button className='lg:hidden flex flex-col justify-center items-center w-10 h-10' onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
                            <span className='block w-8 h-1 bg-[var(--trend-color)] mb-1'></span>
                            <span className='block w-8 h-1 bg-[var(--trend-color)] mb-1'></span>
                            <span className='block w-8 h-1 bg-[var(--trend-color)]'></span>
                        </button>
                        {/* Mobile menu */}
                        {menuOpen && (
                            <ul className='absolute top-full left-0 w-full bg-white flex flex-col gap-5 p-5 shadow-lg z-10 lg:hidden text-[18px] text-[var(--trend-color)]'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        )}
                        <button className='header-button max-lg:hidden px-6 py-2 rounded bg-[var(--trend-color)] text-white font-semibold'>Book Appointment</button>
                    </nav>
                </header>
                <div className='flex flex-col max-lg:px-2 gap-5 items-start justify-center h-full pt-10'>
                    <h1 className='text-[var(--trend-color)] font-bold text-[70px] max-lg:text-[40px] max-lg:leading-tight'>Ear, Nose & Throat <br /> Quality service</h1>
                    <p className='text-[var(--trend-color)] text-[20px] max-lg:text-[16px] max-lg:leading-snug'>There are many variations of passages of Lorem Ipsum available, but <br className='max-lg:hidden'/>the majority have suffered alteration in some injected</p>
                    <div className='flex gap-6 max-lg:gap-3'>
                        <button className='main-button px-6 py-2 rounded bg-[var(--trend-color)] text-white font-semibold'>READ MORE</button>
                        <button className='main-button px-6 py-2 rounded border border-[var(--trend-color)] text-[var(--trend-color)] font-semibold bg-white'>ABOUT US</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header