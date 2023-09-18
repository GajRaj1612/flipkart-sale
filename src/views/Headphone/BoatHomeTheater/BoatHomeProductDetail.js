import React from 'react'
import { Helmet } from 'react-helmet'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'reactstrap'
import Footer from '../../../components/common/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';
import JblEarbudProductDetails from '../../../components/pages/Iphone/JblEarbudProductDetails/JblEarbudProductDetails';
import BoatHomeProductDetails from '../../../components/pages/Iphone/BoatHomeProductDetails/BoatHomeProductDetails';

const BoatHomeProductDetail = () => {

    const navigate = useNavigate()

  return (
    <>
      <div className="product-details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
      </Helmet>
      <Header
        LeftIcon={<Button onClick={()=> navigate(-1)}  className='back-arrow' ><FaArrowLeftLong /></Button>}
      />
      <BoatHomeProductDetails />
      <Footer
      AddLink="/boat-speaker-delivery-address"
      BuyLink="/boat-speaker-delivery-address"
       />
      </div>
    </>
  )
}

export default BoatHomeProductDetail