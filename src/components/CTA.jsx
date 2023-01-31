import React from 'react'
import styles from '../style'
import { Image, Ellipse } from '../assets'

const CTA = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-[#D3F4F2] pt-[1rem] px-[3rem] w-full mt-[13rem] mb-[3rem] h-[20.5rem] rounded-[0.5rem] '>
    <div className='flex flex-col justify-start items-start max-w-[40rem]'>
        <h2 className='flex items-center uppercase justify-center font-Oswald font-semibold ss:text-[30px] text-[20px] text-[#FFA849]'>
    Interested cultivated
    </h2>
        <p className={`${styles.paragraph} max-w-[700px] xs:text-[14px] mt-5 text-black `}>
          Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual imprudence particular had eat unsatiable. 
    </p>

        <button className='bg-[#5BBAB4] hover:bg-[#3ac6bd] text-white font-bold py-2 px-7 mt-6 rounded-[5px]'> Get Started</button>

    </div>

    <div className='flex flex-1 relative w-full justify-end'>
    <img className='relative z-10 bottom-20' src={Image} alt="Fitness cta" />
    <img className='absolute bottom-20 -right-5' src={Ellipse} alt='fitness cta' />
    </div>
    </div>
  )
}

export default CTA