import React from 'react'
import Product from '../components/Product'
import Description from '../components/Description'
import ExploreMore from '../components/ExploreMore'
import ReviewSlider from '../components/ReviewSlider'
import Footer from "../components/Footer";
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      
      <Banner />

      <Product />

      <Description />

      <ExploreMore />

      <ReviewSlider />

      <Footer />      
    </div>
  )
}

export default Home