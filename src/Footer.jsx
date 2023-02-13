import React from 'react'
import logo from './images/logo.svg'
import fb from './images/icon-facebook.svg'
import tw from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import ig from './images/icon-instagram.svg'
import './styles.css'

export const Footer = () => {
  return (
    <footer>
        <div className='footer-top'>
            <img src={logo} alt="logo icon" />
            <div className='icons'>
                <img src={fb} alt="facebook icon" /><img src={tw} alt="twitter icon" /><img src={pinterest} alt="pinterest icon" /><img src={ig} alt="instagram icon" />
            </div>
        </div>

        <hr />

        <div className='footer-sections'>            
            <div>
                <span>OUR COMPANY</span>
                <a href="">HOW WE WORK</a>
                <a href="">WHY INSURE</a>
                <a href="">VIEW PLANS</a>
                <a href="">REVIEWS</a>
            </div>

            <div>
                <span>HELP ME</span>
                <a href="">FAQ</a>
                <a href="">TERMS OF USE</a>
                <a href="">PRIVACY POLICY</a>
                <a href="">COOKIES</a>
            </div>

            <div>
                <span>CONTACT</span>
                <a href="">SALES</a>
                <a href="">SUPPORT</a>
                <a href="">LIVE CHAT</a>
            </div>

            <div>
                <span>OTHERS</span>
                <a href="">CAREERS</a>
                <a href="">PRESS</a>
                <a href="">LICENSES</a>
            </div>
        </div>
    </footer>
  )
}
