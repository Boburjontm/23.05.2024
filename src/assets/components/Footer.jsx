import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='flex gap-2 mt-20'>
      <div className="leftsection px-4">
        <div className="lefttop">
            <h3 className='font-2xl'>Subscribe to our newsletter for industry insights and company news!</h3>
            <label htmlFor="Email" className='flex items-center border-b-[1px]'><input type="email" placeholder='Email adress' /><GrFormNextLink /></label>
            <label htmlFor="" className='flex items-center gap-8'><input type="checkbox" name="" id="" className='bg-orange-300' /><p className='w-[60%]'>I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privesy Policy</p></label>
        </div>
      </div>
      <div className="rightsection">
        <div className="rightop flex gap-36">
            <ul>
                <li className='mb-10 text-gray-400'>About</li>
                <li className=''>Company</li>
                <li className=''>Portfolio</li>
                <li className=''>Partnerships</li>
                <li className=''>Newsroom</li>
                <li className=''>Media Kit</li>
                <li className=''>Careers</li>
                <li className=''>Contact</li>
            </ul>
            <ul>
                <li className='mb-10 text-gray-400'>Delivery Models</li>
                <li className=''>Dedicated development teams</li>
                <li className=''>Project-based delivery</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
