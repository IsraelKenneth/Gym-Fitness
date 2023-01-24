import React, {useState} from 'react'
import {close, logo, menu, cart, search} from "../assets"
import {navLinks} from "../constants"

const Navbar = () => {
const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

  <ul className='list-none sm:flex hidden justify-start items-center flex-1'>
    {navLinks.map((nav, index) =>(
      <li key={nav.id} className={`font-Montserrat font-[800] cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-black  `}>
      <a href={`${nav.id}`}>
        {nav.title}
      </a>
      </li>
    ))
    }
  </ul>
      <div className='justify-center items-center flex flex-1'>
      <img src={logo} alt="trainer" className='w-[128=px] h-[27px] items-center' />
      </div>

      <div className="justify-end flex items-center flex-1">
        <button className='mr-10 font-Montserrat font-[800]' type="button">Sign up</button>
        <img src={search} alt="search gym" className='w-[20px] h-[20px] mr-10'/>
        <img src={cart} alt="cart gym" className='w-[20px] h-[20px] ' />
      </div>


  <div className='sm:hidden flex flex-1 justify-end item-center'>
<img src={toggle ? close : menu} alt = "menu" className='w-[28px] h-[28px] object-contain'
onClick={() => setToggle((prev) => !prev)}
/>
<div className={`${toggle ? 'flex' : 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex justify-end items-center flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-10"} text-white  `}>
                <a href={`${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))
            }
          </ul>
</div>

  </div>
    </nav>
  )
}

export default Navbar