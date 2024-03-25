import React, { useState } from 'react';
import { IoLanguage } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import "../App.css";
export default function Footer() {
    const [selectedItem, setSelectedItem] = useState('English');
    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    };
    return (
        <div className='container-fluid min-h-64 bg-black text-white pt-5 pb-5 relative px-3' id='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p>Questions?call 00-800-919-1694</p>
                    </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap  justify-evenly gap-3'>
                    <div className=' flex-1'>
                        <ul className='flex flex-col gap-2 p-0 whitespace-nowrap'>
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                        </ul>
                    </div>
                    <div className=' flex-1'>
                        <ul className='flex flex-col gap-2 p-0 '>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>
                    <div className=' flex-1'>
                        <ul className='flex flex-col gap-2 p-0'>
                            <li>Account</li>
                            <li>Ways to Watch</li>
                            <li>Corporate Information</li>
                            <li>Only on Netflix</li>
                        </ul>
                    </div>
                    <div className=' flex-1'>
                        <ul className='flex flex-col gap-2 p-0 whitespace-nowrap'>
                            <li>Media Center</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Dropdown onSelect={handleSelect} className='border-1 rounded-md inline-block my-2'>
                            <Dropdown.Toggle className='bg-[rgba(0,0,0,0.7)] text-white' variant='none' id="dropdown-basic">
                                <IoLanguage className='inline mr-[.3rem]' /><span className='inline'>{selectedItem}</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant='dark'>
                                <Dropdown.Item eventKey="English">English</Dropdown.Item>
                                <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
                                <Dropdown.Item eventKey="Telugu">Telugu</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p>Netflix India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
