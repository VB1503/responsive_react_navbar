import React from 'react'
import Carousel from './components/Carousel';
import { Images } from "./components/Data";
import './styles/carousel.css';
function Home() {
  return (
    <div className='homePage'>
      <Carousel images={Images} />
    </div>
  )
}

export default Home

