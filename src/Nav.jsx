import React from 'react'
import logo from './images/logo.svg'
import './styles.css'

export const Nav = () => {
    const mobileMenu = () => {
        console.log("hola")
        document.querySelector(".nav-right").classList.toggle("closeBurger")
        document.querySelector(".mobileMenu").classList.toggle("mostrarMobile")
    }
  return (
    <>    
    <nav>
        <img src={logo} alt="logo image" />
        <div onClick={mobileMenu} className='nav-right'>
            <a href=''>HOW WE WORK</a>
            <a href="">BLOG</a>
            <a href="">ACCOUNT</a>
            <button className='view-plans'>VIEW PLANS</button>
        </div>
    </nav>
    <div className='mobileMenu'>
        <p>HOW WE WORK</p>
        <p>BLOG</p>
        <p>ACCOUNT</p>
        <button className='view-plans'>VIEW PLANS</button>
    </div>
    </>
  )
}
