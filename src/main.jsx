import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { Presentation } from './Presentation'
import { Slogan } from './Slogan'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <Presentation />
    <Slogan />
    <Footer />
  </>
)
