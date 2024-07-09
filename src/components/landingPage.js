import React, { useState } from 'react';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoLanguage } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import v1 from "../assets/video1.m4v";
import tv1 from "../assets/tv-1.png";
import img1 from "../assets/download.png";
import tv2 from "../assets/tv-2.png";
import kidsImage from "../assets/netflixKids.png";
import Faqsection from './faqsection';
import Footer from './footer';
import { useLanguage } from "./LanguageProvider";
import en from "../translations/en";
import hi from "../translations/hi";
const translations = {
    en,
    hi,
};
function LandingPage() {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];
    const [selectedItem, setSelectedItem] = useState('English');
    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
        setLanguage(eventKey)
    };

    return (
        <>
            <div className='container-fluid lg:min-h-[120dvh] background-img w-full flex flex-col p-0'>
                <div className='flex-grow w-full bg-[rgba(0,0,0,0.7)] z-10 relative pb-5'>
                    {/* navbar */}
                    <nav className='flex justify-between absolute top-0 w-full pad pt-3'>
                        <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/240323/93aad8e30a3b25d13395474bff8264a2.png" className='h-9 lg:h-14' alt="netflix-font" border="0" /></a>
                        <ul className='inline-flex items-center ul-gap'>
                            <li>
                                <Dropdown onSelect={handleSelect} className='border-1 rounded-md'>
                                    <Dropdown.Toggle className='bg-[rgba(0,0,0,0.7)] text-white' variant='none' id="dropdown-basic">
                                        <IoLanguage className='inline mr-[.3rem]' /><span className='hidden lg:inline'>{selectedItem}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant='dark'>
                                        <Dropdown.Item eventKey="English" >English</Dropdown.Item>
                                        <Dropdown.Item eventKey="Hindi" >Hindi</Dropdown.Item>
                                        <Dropdown.Item eventKey="Telugu" >Telugu</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </li>
                            <li>
                                <button className='bg-red-600 font-bold text-white rounded-md text-sm px-3 py-[.5rem] whitespace-nowrap'>Sign In</button>
                            </li>
                        </ul>
                    </nav>

                    <div className=' mt-[30%] md:mt-[22%] w-full flex flex-col items-center justify-center text-white px-3 lg:px-0'>
                        <div>
                            <h2 className='text-3xl md:text-[3.3rem]  font-bold md:font-extrabold text-center'>
                                Unlimited movies, TV shows and more
                            </h2>
                            <div className='mt-4 mb-1 text-xl md:text-2xl text-center'>
                                <p>
                                    Watch anywhere. Cancel anytime.
                                </p>
                                <p>
                                    Ready to watch? Enter your email to create or restart your membership.
                                </p>
                            </div>
                            <div className='flex items-center justify-center wrap text-white ul-gap'>
                                <input type='email' className='bg-[rgba(0,0,0,0.3)] border-1 py-3 pl-3 w-full md:w-[24rem] h-full' placeholder='email address' />
                                <button className='bg-red-600 px-3 py-[0.7rem] text-2xl font-bold flex items-center h-full whitespace-nowrap'>
                                    Get Started <FaChevronRight className='inline-block' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* devider */}
            <div className='bg-[#282828] h-2 w-full'></div>

            <div className='container-fluid bg-black'>
                <div className='row w-full relative text-white m-0 px-2 lg:px-2 py-[1.75rem] lg:py-14'>
                    <div className='col-md-6 mb-1 lg:mb-0 text-position'>
                        <div className='h-full w-full flex flex-col justify-center '>
                            <h2 className=' text-3xl lg:text-5xl font-extrabold mb-3'>Enjoy on your TV</h2>
                            <p className=' text-xl md:text-2xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='h-full w-full flex flex-col items-start justify-center mask'>
                            {/* <video controls loop autoPlay="true" className='w-full h-full'>
                                <source src={v1} type="video/mp4" />
                            </video> */}
                            <img src={require("../assets/enjoyOnTv.png")} className='mask relative' alt='
                            enjoyOnTv.png'/>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-[#282828] h-2 w-full'></div>

            <div className='container-fluid bg-black p-0'>
                <div className='row flex-row-reverse w-full relative text-white m-0 px-2 lg:px-2 py-[1.75rem] lg:py-14'>
                    <div className='col-md-6 order-2'>
                        <div className='h-full w-full flex flex-col items-start justify-center mask'>
                            <img src={img1} alt='shows' />
                        </div>
                    </div>
                    <div className='col-md-6 order-1 mb-1 lg:mb=0 text-left text-position'>
                        <div className='h-full w-full flex flex-col justify-center lg:px-2 '>
                            <h2 className=' text-3xl lg:text-5xl font-extrabold mb-3'>Download your shows to watch offline</h2>
                            <p className=' text-xl md:text-2xl lg:px-3'>Save your favourites easily and always have something to watch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#282828] h-2 w-full'></div>

            <div className='container-fluid bg-black'>
                <div className='row w-full relative text-white m-0 px-2 lg:px-2 py-[1.75rem] lg:py-14'>
                    <div className='col-md-6 mb-1 lg:mb=0 text-position'>
                        <div className='h-full w-full flex flex-col justify-center '>
                            <h2 className=' text-3xl lg:text-5xl font-extrabold mb-3'>Watch everywhere</h2>
                            <p className=' text-xl md:text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='h-full w-full flex flex-col items-start justify-center mask'>

                            <img src={require("../assets/watchEverywhere.png")} alt='watchEverywhere.png' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-[#282828] h-2 w-full'></div>

            <div className='container-fluid bg-black p-0'>
                <div className='row flex-row-reverse w-full relative text-white m-0 px-2 lg:px-2 py-[1.75rem] lg:py-14'>
                    <div className='col-md-6 order-2'>
                        <div className='h-full w-full flex flex-col items-start justify-center mask'>
                            <img src={kidsImage} alt='kids image' />
                        </div>
                    </div>
                    <div className='col-md-6 order-1 mb-1 lg:mb=0 text-left text-position'>
                        <div className='h-full w-full flex flex-col justify-center lg:px-2 '>
                            <h2 className=' text-3xl lg:text-5xl font-extrabold mb-3'>Create profiles for kids</h2>
                            <p className=' text-xl md:text-2xl lg:px-3'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#282828] h-2 w-full'></div>

            {/* frequently asked questions */}
            <Faqsection />
            <div className='bg-[#282828] h-2 w-full'></div>

            {/* footer */}
            <Footer />
        </>
    )
}

export default LandingPage;
