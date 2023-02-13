import React from 'react'
import introdk from './images/image-intro-desktop.jpg'
import people from './images/icon-people-first.svg'
import affordable from './images/icon-affordable-prices.svg'
import snappy from './images/icon-snappy-process.svg'
import './styles.css'

export const Presentation = () => {
  return (
    <div className='center'>
    <div className='presentation'>
        <div className='insurance'>
            <div className='insurance-left'>
                <span></span>
                <h1>Humanizing your insurance</h1>
                <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <button className='view-plans'>VIEW PLANS</button>
            </div>
            <img src={introdk} alt="intro desktop" />
        </div>
    </div>

    <div className='different'>
        <span></span>
        <h2>We´re different</h2>
        <div className='different-offers'>
            <div className='div-offers'>
                <img src={snappy} alt="snappy icon" />
                <h3>Snappy Process</h3>
                <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
            </div>

            <div className='div-offers'>
                <img src={affordable} alt="affordable icon" />
                <h3>Affordable Prices</h3>
                <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
            </div>

            <div className='div-offers'>
                <img src={people} alt="people icon" />
                <h3>People First</h3>
                <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
