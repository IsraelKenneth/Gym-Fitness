import React from 'react'
import styles from '../style'
import { certification0, certification1, certification2, certification3 } from "../assets"

const Introducing = () => {
  return (
    <section id='introducing' className={`flex md:flex-row xs:py-2  flex-col sm:py-10 py-6 `} >
<div className={`flex ${styles.flexStart} mt-[2rem] ss:flex-row flex-col xl:px-0 sm:px-0 px-6 w-full`}>

<div className='flex flex-col flex-1 w-full '>
<div>
<h1 className="flex-1 font-Oswald font-semibold xs:mb-3 xs:text-[22px] ss:text-[38px] text-[13px] text-black ss:leading-[50.8px] xs:leading-[30px] leading-[48px]">
Introducing Angela Lopez </h1>
<h4 className='uppercase font-poppins font-semibold ss:leading-[40.8px] xs:text-[14px] xs:leading-[20px] leading-[48px]'>Wooded ladies she basket season age her uneasy saw</h4>
</div>

<p className={`flex mt-4  ${styles.flexStart}`}>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.</p>
<p className={`flex mt-4  ${styles.flexStart} mt-[10]`}>Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. </p>


</div>
      <div className={`flex flex-1 flex-col justify-end items-center w-full xs:mt-3  text-black `}>
          <div className={`flex flex-row justify-end items-center`} >
            <img className='mr-10 w-[200px] xs:w-[120px]' src={certification0} alt="Fitness training" />
            <img className='mr-10 w-[200px] xs:w-[120px]' src={certification1} alt="Fitness training" />
      </div>
          <div className={`flex flex-row justify-end items-center mt-5`}>
            <img className='mr-10 w-[200px] xs:w-[120px]' src={certification2} alt="Fitness training" />
            <img className='mr-10 w-[200px] xs:w-[120px]' src={certification3} alt="Fitness training" />
          </div>

      </div>
    </div>
    </section>
  )
}

export default Introducing