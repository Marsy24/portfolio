import React from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { Logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = React.useState('');
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex sm:flex-row flex-col justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2 sm:mb-0 mb-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >

          <Logo className="logo max-w-fit" />
          
          <span className='sm:block hidden pl-1 text-white text-[18px] font-bold cursor-pointer'>| JavaScript</span>
          <p className='text-red-500'></p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 sm:justify-end justify-center items-center w-full'>
          <img src={! toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className={`${!toggle ? 'opacity-0 -right-96' : 'opacity-100 right-1'} top-32 opacity-0 transition-all duration-300 p-6 black-gradient absolute mx-4 my-2 w-[95%] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar