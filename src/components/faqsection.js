import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaChevronRight } from "react-icons/fa6";
export default function Faqsection() {
    const [questions, setQuestions] = useState([{
        id: 1, Q: "What is Netflix?", isOpened: false,
        ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price."
    }, {
        id: 2, Q: "How much does Netflix Cost?", isOpened: false,
        ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."
    }, {
        id: 3, Q: "Where can i watch?", isOpened: false,
        ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    }, {
        id: 4, Q: "How do i cancel?", isOpened: false,
        ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    }, {
        id: 5, Q: "What can i watch on Netflix?", isOpened: false,
        ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }]);

    const handleToggle = (id) => {
        setQuestions(questions.map(question => {
            if (question.id === id) {
                return { ...question, isOpened: !question.isOpened };
            } else {
                return { ...question, isOpened: false };;
            }
        }));
    };

    return (
        <div className='min-h-screen bg-black text-white pt-3 pb-5 relative px-3'>
            <header className='text-[1.77rem] font-extrabold lg:text-[3rem] text-center  mt-3 mb-4'>Frequently Asked Questions.</header>
            <div className='flex flex-col items-center justify-center'>
                {questions.map((question, index) => (
                    <div className='w-full lg:w-[80%] mb-2 transition-all delay-150 duration-300 ease-in-out cursor-pointer' key={index} >
                        <div className='select-none flex justify-between items-center mb-1 bg-[#242424] lg:text-[1.875rem] px-3 py-3 hover:opacity-70 transition-all duration-300 delay-150 ease-in-out' onClick={() => handleToggle(question.id)}>
                            <span>{index + 1 + '.' + question.Q}</span>
                            <span onClick={() => handleToggle(question.id)}>{question.isOpened ? <AiOutlinePlus className='rotate-45 transition-transform duration-150' /> : <AiOutlinePlus />}</span>
                        </div>
                        {question.isOpened && (
                            <div className='bg-[#242424] px-3 py-3 lg:text-[1.5rem] '>
                                <p>{question.ans}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='text-center mt-5 mb-3'>
                <p className='text-xl lg:text-[1.5rem] mb-4 lg:mb-3'>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className='flex items-center justify-center wrap text-white gap-3 lg:gap-2'>
                    <input type='email' className='bg-[rgba(0,0,0,0.3)] border-1 py-3 pl-3 w-full md:w-[24rem] h-full' placeholder='email address' />
                    <button className='bg-red-600 px-3 py-[0.7rem] text-2xl font-bold flex items-center h-full whitespace-nowrap'>
                        Get Started <FaChevronRight className='inline-block' />
                    </button>
                </div>
            </div>
        </div>
    );
}
