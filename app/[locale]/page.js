import Header from '@/components/Header/Header'
import Advantages from '@/components/HomePage/Advantages'
import HeroSlider from '@/components/HomePage/HeroSlider'
import HomePageCategory from '@/components/HomePage/HomePageCategory'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <HomePageCategory />
      <Advantages />
      
    </div>
  )
}

export default page