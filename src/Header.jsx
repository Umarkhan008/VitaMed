import React from 'react'
import logo from '../public/assets/logo.jpg'
import bgVid from '../public/assets/main-bg4.mp4'
const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
        <div className='w-full'>
            <main className="main  flex flex-col gap-20  w-full max-w-[1400px] mx-auto max-lg:h-[70vh]  max-lg:px-3">
                 <div className="absolute left-0 w-full   h-[800px] max-lg:h-[70vh] overflow-hidden">
                    {/* Video background */}
                    <video className='h-[800px] max-lg:h-[70vh] object-cover w-full  absolute left-0 z-[-1]' autoPlay loop muted>
                        <source src={bgVid} />
                    </video>
                    {/* Wave shape */}
                    <div className="custom-shape-divider-bottom-1759732534">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                {/* <video className='h-[800px] max-lg:h-[70vh] object-cover w-[100vw] absolute left-0 z-[-1]' autoPlay loop muted>
                    <source src={bgVid} />
                </video> */}
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
                <div className='flex flex-col max-lg:px-2 gap-5 items-start justify-center h-max'>
                    <h1 className='text-[var(--trend-color)] font-bold text-[70px] max-lg:text-[40px] max-lg:leading-tight'>Ear, Nose & Throat <br /> Quality service</h1>
                    <p className='text-[var(--trend-color)] text-[20px] max-lg:text-[16px] max-lg:leading-snug'>There are many variations of passages of Lorem Ipsum available, but <br className='max-lg:hidden' />the majority have suffered alteration in some injected</p>
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