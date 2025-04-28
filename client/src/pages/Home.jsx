import React from 'react'
import Hero from '../components/Home/Hero'
import Subsection from '../components/Home/SubSection'
import PromotionGrid from '../components/Home/Promo'
import CategoryRow from '../components/Home/CatogryRow'
import ProductGrid from '../components/Home/ProductGrid'
import StoreLocator from '../components/Home/StoreLocator'
import BannerGrid from '../components/Home/BannerGrid'
import Collections from '../components/Home/Collections'
import Craftsmanship from '../components/Home/Collections2'
import ImageGallery from '../components/Home/ImageGallery'
import PromotionGrid2 from '../components/Home/PromotionGrid2'
import Treanding from '../components/Home/Treanding'
import CustomerStoriesPage from '../components/Home/CustomerStoriesPage'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Subsection/>
        <PromotionGrid/>
        <CategoryRow/>
        <ProductGrid/>
        <PromotionGrid2/>
        <Treanding/>
        <ProductGrid/>
        <ImageGallery/>
        <BannerGrid/>
        <Collections/>
        <Craftsmanship/>
        <StoreLocator/>
        <Craftsmanship/>
        <CustomerStoriesPage/>
    </div>
  )
}

export default Home