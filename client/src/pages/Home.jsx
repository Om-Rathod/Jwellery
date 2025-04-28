import React from 'react'
import Hero from '../components/Home/Hero'
import Subsection from '../components/Home/SubSection'
import PromotionGrid from '../components/Home/Promo'
import CategoryRow from '../components/Home/CatogryRow'
import ProductGrid from '../components/Home/ProductGrid'
import StoreLocator from '../components/Home/StoreLocator'
import BannerGrid from '../components/Home/BannerGrid'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Subsection/>
        <PromotionGrid/>
        <CategoryRow/>
        <PromotionGrid/>
        <ProductGrid/>
        <BannerGrid/>
        <StoreLocator/>
    </div>
  )
}

export default Home