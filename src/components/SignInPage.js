import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoLanguage } from "react-icons/io5";
export default function SignInPage() {
    return (
        <div className='container-fluid background-img w-full flex flex-col p-0' id='signinPage'>
            <div className='flex-grow w-full md:bg-[rgba(0,0,0,0.65)] bg-[rgba(0,0,0,1)] z-10 relative pb-5'>
                <nav className='m-[18px]'>
                    <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/240323/93aad8e30a3b25d13395474bff8264a2.png" className='h-9 lg:h-16' alt="netflix-font" border="0" /></a>
                </nav>
                <div className='bg-[rgba(0,0,0,0.88)] md:bg-[rgba(0,0,0,0.7)] md:p-[3rem] px-[16px] md:w-[30rem] mx-auto text-white'>
                    <h2 className='text-[1.975rem] font-bold text-white'>Sign In</h2>
                    <form className='mt-[1.7rem] w-full'>
                        <Form.Floating className="mb-3 dark-theme">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom" className='bg-transparent'>Email address</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3 dark-theme">
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom" className='bg-transparent'>Password</label>
                        </Form.Floating>
                        <button className="text-white w-full bg-[#fc0a0a] py-2 rounded-md cursor-pointer">Sign In</button>
                        <p className='text-center text-white opacity-70 m-0 py-3'>OR</p>
                        <button className="text-white w-full bg-[#2c2c2c] py-2 rounded-md mb-3 cursor-pointer">Use a sign-in code</button>
                        <p className="transition-all delay-150 text-gray-100 text-center mx-auto hover:underline hover:underline-offset-2 hover:text-gray-300 cursor-pointer">
                            Forgot Password?
                        </p>
                        <div className='my-2'>
                            <input type='checkbox' id='check' className='h-4 w-4' />
                            <label htmlFor='check' className='ml-1 cursor-pointer'>Remember me</label>
                        </div>
                        <p className='text-lg text-gray-300'>New to Netflix? <span className='font-bold text-white hover:underline hover:underline-offset-2 hover:text-gray-300 cursor-pointer'>Sign Up</span></p>
                        <p className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer'>Learn more.</span></p>
                    </form>

                </div>
            </div>
            <div className='container-fluid md:absolute md:top-[93%] text-gray-300 bg-[rgba(0,0,0,1)] w-full px-4 lg:px-5 py-4 z-20'>
                <div className='row md:pt-[5rem]'>
                    <div className='col-md-12'>
                        <p className=''>Questions? call 00-800-919-1694</p>
                    </div>
                </div> 
                <div className='flex flex-wrap sm:flex-nowrap items-baseline justify-evenly gap-x-3'>
                    <div className='flex-1'>
                        <ul className='flex flex-col gap-2 p-0 whitespace-nowrap'>
                            <li>FAQ</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>
                    <div className=' flex-1'>
                        <ul className='flex flex-col gap-2 p-0 '>
                            <li>Help Center</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div className=' flex-1'>
                        <ul className='p-0 whitespace-nowrap'>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div className=' flex-1'>
                        <ul className='p-0 whitespace-nowrap'>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Dropdown className='border-1 rounded-md inline-block my-2'>
                            <Dropdown.Toggle className='bg-[rgba(0,0,0,0.7)] text-white' variant='none' id="dropdown-basic">
                                <IoLanguage className='inline mr-[.3rem]' /><span className='inline'>English</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant='dark'>
                                <Dropdown.Item eventKey="English">English</Dropdown.Item>
                                <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
                                <Dropdown.Item eventKey="Telugu">Telugu</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}
