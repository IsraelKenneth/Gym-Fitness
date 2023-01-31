import React from 'react'
import styles from '../style'

const CTA2 = () => {
  return (
 <div className={`flex items-center flex-col xl:px-20 ss:px-20 px-6 py-20 w-full`}>
          <p className={`${styles.paragraph} mb-[2rem] xs:text-[14px] text-[24px] font-Oswald font-semi text-white `}>
              — Call to action subheading —
 </p>
          <h2 className= 'text-center xs:text-[17px] text-[38px] uppercase font-Oswald font-semibold text-black'>
    Get a quick councelling from Mel <br/> Schwartz today
 </h2>
    <div className='flex flex-row mt-5'>
              <button className='bg-black hover:bg-[#313131] text-white font-bold py-2 px-10 mr-[5rem] rounded-[5px] uppercase'> Book Appointment</button>

              <button className=' hover:bg-white text-black font-bold py-4 px-10 rounded-[5px] border-black border-2 uppercase'> Learn More</button>

    </div>
    </div>
  )
}

export default CTA2