import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../views/HomePage';
import ProductDetails from '../views/ProductDetails';
import DeliveryAddress from '../views/DeliveryAddress';
import OrderSummary from '../views/OrderSummary';
import PaymentDetails from '../views/PaymentDetails';
import BlueIphoneProductDetails from '../views/Iphone/BlueIphone/BlueIphoneProductDetails';
import BlueIphoneDeliveryAddress from '../views/Iphone/BlueIphone/BlueIphoneDeliveryAddress';
import BlueIphonePaymentDetails from '../views/Iphone/BlueIphone/BlueIphonePaymentDetails';
import BlueIphoneOrderSummary from '../views/Iphone/BlueIphone/BlueIphoneOrderSummary';

import MidNightIphoneProductDetails from '../views/Iphone/MidNightIphone/MidNightIphoneProductDetails';
import MidNightIphoneDeliveryAddress from '../views/Iphone/MidNightIphone/MidNightIphoneDeliveryAddress';
import MidNightIphonePaymentDetails from '../views/Iphone/MidNightIphone/MidNightIphonePaymentDetails';
import MidNightIphoneOrderSummary from '../views/Iphone/MidNightIphone/MidNightIphoneOrderSummary';

import DipPurpleIphoneDeliveryAddress from '../views/Iphone/DipPurpleIphone/DipPurpleIphoneDeliveryAddress';
import DipPurpleIphonePaymentDetails from '../views/Iphone/DipPurpleIphone/DipPurpleIphonePaymentDetails';
import DipPurpleIphoneProductDetails from '../views/Iphone/DipPurpleIphone/DipPurpleIphoneProductDetails';
import DipPurpleIphoneOrderSummary from '../views/Iphone/DipPurpleIphone/DipPurpleIphoneOrderSummary'

import SamGalaxyDeliveryAddress from '../views/Iphone/SamGalaxy/SamGalaxyDeliveryAddress';
import SamGalaxyPaymentDetails from '../views/Iphone/SamGalaxy/SamGalaxyPaymentDetails';
import SamGalaxyProductDetails from '../views/Iphone/SamGalaxy/SamGalaxyProductDetails';
import SamGalaxyOrderSummary from '../views/Iphone/SamGalaxy/SamGalaxyOrderSummary'


import ExitPage from '../views/ExitPage';
import HeadphonePaymentDetails from '../views/Headphone/SonyHeadPhone/HeadphonePaymentDetails';
import HeadphoneDeliveryAddress from '../views/Headphone/SonyHeadPhone/HeadphoneDeliveryAddress';
import HeadphoneOrderSummary from '../views/Headphone/SonyHeadPhone/HeadphoneOrderSummary';
import HeadphoneProductDetails from '../views/Headphone/SonyHeadPhone/HeadphoneProductDetails';

import BoseHeadphonePaymentDetails from '../views/Headphone/BoseHeadPhone/HeadphonePaymentDetails';
import BoseHeadphoneDeliveryAddress from '../views/Headphone/BoseHeadPhone/HeadphoneDeliveryAddress';
import BoseHeadphoneOrderSummary from '../views/Headphone/BoseHeadPhone/HeadphoneOrderSummary';
import BoseHeadphoneProductDetails from '../views/Headphone/BoseHeadPhone/HeadphoneProductDetails';

import SamsungWashProductDetails from '../views/WashingMachine/Samsung/SamsungWashProductDetails';
import SamsungWashDeliveryAddress from '../views/WashingMachine/Samsung/SamsungWashDeliveryAddress';
import SamsungWashOrderSummary from '../views/WashingMachine/Samsung/SamsungWashOrderSummary';
import SamsungWashPaymentDetails from '../views/WashingMachine/Samsung/SamsungWashPaymentDetails';

import TrollyDeliveryAddress from '../views/WashingMachine/TrollyBag/TrollyDeliveryAddress';
import TrollyProductDetails from '../views/WashingMachine/TrollyBag/TrollyProductDetails';
import TrollyOrderSummary from '../views/WashingMachine/TrollyBag/TrollyOrderSummary';
import TrollyPaymentDetails from '../views/WashingMachine/TrollyBag/TrollyPaymentDetails';

import WingsEarbudOrderSummary from '../views/Headphone/WingsEarbud/WingsEarbudOrderSummary';
import WingsEarbudDeliveryAddress from '../views/Headphone/WingsEarbud/WingsEarbudDeliveryAddress';
import WingsEarbudPaymentDetails from '../views/Headphone/WingsEarbud/WingsEarbudPaymentDetails';
import WingsEarbudProductDetail from '../views/Headphone/WingsEarbud/WingsEarbudProductDetail';

import UshaFanPaymentDetails from '../views/Fan/UshaFan/UshaFanPaymentDetails';
import UshaFanDeliveryAddress from '../views/Fan/UshaFan/UshaFanDeliveryAddress';
import UshaFanOrderSummary from '../views/Fan/UshaFan/UshaFanOrderSummary';
import UshaFanProductDetails from '../views/Fan/UshaFan/UshaFanProductDetails';

import MagPowerbankProductDetails from '../views/Fan/MagPowerbank/MagPowerbankProductDetails';
import MagPowerbankDeliveryAddress from '../views/Fan/MagPowerbank/MagPowerbankDeliveryAddress';
import MagPowerbankOrderSummary from '../views/Fan/MagPowerbank/MagPowerbankOrderSummary';
import MagPowerbankPaymentDetails from '../views/Fan/MagPowerbank/MagPowerbankPaymentDetails';

import ChargerProductDetails from '../views/WashingMachine/Charger/ChargerProductDetails';
import ChargerDeliveryAddress from '../views/WashingMachine/Charger/ChargerDeliveryAddress';
import ChargerOrderSummary from '../views/WashingMachine/Charger/ChargerOrderSummary';
import ChargerPaymentDetails from '../views/WashingMachine/Charger/ChargerPaymentDetails';

import SamsungFridgeDeliveryAddress from '../views/WashingMachine/SamsungFridge/SamsungFridgeDeliveryAddress';
import SamsungFridgeOrderSummary from '../views/WashingMachine/SamsungFridge/SamsungFridgeOrderSummary';
import SamsungFridgeProductDetails from '../views/WashingMachine/SamsungFridge/SamsungFridgeProductDetails';
import SamsungFridgePaymentDetails from '../views/WashingMachine/SamsungFridge/SamsungFridgePaymentDetails';

import LgAcDeliveryAddress from '../views/WashingMachine/LgAc/LgAcDeliveryAddress';
import LgAcPaymentDetails from '../views/WashingMachine/LgAc/LgAcPaymentDetails';
import LgAcOrderSummary from '../views/WashingMachine/LgAc/LgAcOrderSummary';
import LgAcProductDetails from '../views/WashingMachine/LgAc/LgAcProductDetails';

import JblEarbudProductDetail from '../views/Headphone/JblEarbud/JblEarbudProductDetail';
import JblEarbudDeliveryAddress from '../views/Headphone/JblEarbud/JblEarbudDeliveryAddress';
import JblEarbudOrderSummary from '../views/Headphone/JblEarbud/JblEarbudOrderSummary';
import JblEarbudPaymentDetails from '../views/Headphone/JblEarbud/JblEarbudPaymentDetails';

import BoatHomeProductDetail from '../views/Headphone/BoatHomeTheater/BoatHomeProductDetail';
import BoatHomeDeliveryAddress from '../views/Headphone/BoatHomeTheater/BoatHomeDeliveryAddress';
import BoatHomeOrderSummary from '../views/Headphone/BoatHomeTheater/BoatHomeOrderSummary';
import BoatHomePaymentDetails from '../views/Headphone/BoatHomeTheater/BoatHomePaymentDetails';

import Boat320ProductDetail from '../views/Headphone/Boat320Theater/Boat320ProductDetail';
import Boat320DeliveryAddress from '../views/Headphone/Boat320Theater/Boat320DeliveryAddress';
import Boat320OrderSummary from '../views/Headphone/Boat320Theater/Boat320OrderSummary';
import Boat320PaymentDetails from '../views/Headphone/Boat320Theater/Boat320PaymentDetails';

import SamsungTvProductDetails from '../views/TV/SamsungTv/SamsungTvProductDetails';
import SamsungTvDeliveryAddress from '../views/TV/SamsungTv/SamsungTvDeliveryAddress';
import SamsungTvOrderSummary from '../views/TV/SamsungTv/SamsungTvOrderSummary';
import SamsungTvPaymentDetails from '../views/TV/SamsungTv/SamsungTvPaymentDetails';

import OneplusTvProductDetails from '../views/TV/OneplusTv/OneplusTvProductDetails';
import OneplusTvDeliveryAddress from '../views/TV/OneplusTv/OneplusTvDeliveryAddress';
import OneplusTvOrderSummary from '../views/TV/OneplusTv/OneplusTvOrderSummary';
import OneplusTvPaymentDetails from '../views/TV/OneplusTv/OneplusTvPaymentDetails';

import MacLaptopProductDetails from '../views/TV/MacLaptop/MacLaptopProductDetails';
import MacLaptopDeliveryAddress from '../views/TV/MacLaptop/MacLaptopDeliveryAddress';
import MacLaptopPaymentDetails from '../views/TV/MacLaptop/MacLaptopPaymentDetails';
import MacLaptopOrderSummary from '../views/TV/MacLaptop/MacLaptopOrderSummary';

import OnePlusProductDetails from '../views/Iphone/OnePlus/OnePlusProductDetails';
import OnePlusDeliveryAddress from '../views/Iphone/OnePlus/OnePlusDeliveryAddress';
import OnePlusOrderSummary from '../views/Iphone/OnePlus/OnePlusOrderSummary';
import OnePlusPaymentDetails from '../views/Iphone/OnePlus/OnePlusPaymentDetails';

import SamsngS23ProductDetails from '../views/Iphone/SamsngS23/SamsngS23ProductDetails';
import SamsngS23PaymentDetails from '../views/Iphone/SamsngS23/SamsngS23PaymentDetails';
import SamsngS23DeliveryAddress from '../views/Iphone/SamsngS23/SamsngS23DeliveryAddress';
import SamsngS23OrderSummary from '../views/Iphone/SamsngS23/SamsngS23OrderSummary';

import AppleWatchProductDetails from '../views/Watch/AppleWatch/AppleWatchProductDetails';
import AppleWatchDeliveryAddress from '../views/Watch/AppleWatch/AppleWatchDeliveryAddress';
import AppleWatchOrderSummary from '../views/Watch/AppleWatch/AppleWatchOrderSummary';
import AppleWatchPaymentDetails from '../views/Watch/AppleWatch/AppleWatchPaymentDetails';

import GalaxyFlipProductDetails from '../views/Iphone/GalaxyFlip/GalaxyFlipProductDetails';
import GalaxyFlipDeliveryAddress from '../views/Iphone/GalaxyFlip/GalaxyFlipDeliveryAddress';
import GalaxyFlipOrderSummary from '../views/Iphone/GalaxyFlip/GalaxyFlipOrderSummary';
import GalaxyFlipPaymentDetails from '../views/Iphone/GalaxyFlip/GalaxyFlipPaymentDetails';

import GalaxyWatchDeliveryAddress from '../views/Watch/GalaxyWatch/GalaxyWatchDeliveryAddress';
import GalaxyWatchOrderSummary from '../views/Watch/GalaxyWatch/GalaxyWatchOrderSummary';
import GalaxyWatchProductDetails from '../views/Watch/GalaxyWatch/GalaxyWatchProductDetails';
import GalaxyWatchPaymentDetails from '../views/Watch/GalaxyWatch/GalaxyWatchPaymentDetails';







const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/thank-you' element={<ExitPage />} />
          <Route path='/product-details' element={<ProductDetails />} />

          <Route path='/blue-iphone-product-details' element={<BlueIphoneProductDetails />} />
          <Route path='/blue-iphone-delivery-address' element={<BlueIphoneDeliveryAddress />} />
          <Route path='/blue-iphone-order-summary' element={<BlueIphoneOrderSummary />} />
          <Route path='/blue-iphone-payment-details' element={<BlueIphonePaymentDetails />} />

          <Route path='/midnight-iphone-product-details' element={<MidNightIphoneProductDetails />} />
          <Route path='/midnight-iphone-delivery-address' element={<MidNightIphoneDeliveryAddress />} />
          <Route path='/midnight-iphone-order-summary' element={<MidNightIphoneOrderSummary />} />
          <Route path='/midnight-iphone-payment-details' element={<MidNightIphonePaymentDetails />} />

          <Route path='/deeppurple-iphone-product-details' element={<DipPurpleIphoneProductDetails />} />
          <Route path='/deeppurple-iphone-delivery-address' element={<DipPurpleIphoneDeliveryAddress />} />
          <Route path='/deeppurple-iphone-order-summary' element={<DipPurpleIphoneOrderSummary />} />
          <Route path='/deeppurple-iphone-payment-details' element={<DipPurpleIphonePaymentDetails />} />

          <Route path='/samsung-mobile-product-details' element={<SamGalaxyProductDetails />} />
          <Route path='/samsung-mobile-delivery-address' element={<SamGalaxyDeliveryAddress />} />
          <Route path='/samsung-mobile-order-summary' element={<SamGalaxyOrderSummary />} />
          <Route path='/samsung-mobile-payment-details' element={<SamGalaxyPaymentDetails />} />

          <Route path='/sony-headphone-product-details' element={<HeadphoneProductDetails />} />
          <Route path='/sony-headphone-delivery-address' element={<HeadphoneDeliveryAddress />} />
          <Route path='/sony-headphone-order-summary' element={<HeadphoneOrderSummary />} />
          <Route path='/sony-headphone-payment-details' element={<HeadphonePaymentDetails />} />

          <Route path='/bose-headphone-product-details' element={<BoseHeadphoneProductDetails />} />
          <Route path='/bose-headphone-delivery-address' element={<BoseHeadphoneDeliveryAddress />} />
          <Route path='/bose-headphone-order-summary' element={<BoseHeadphoneOrderSummary />} />
          <Route path='/bose-headphone-payment-details' element={<BoseHeadphonePaymentDetails />} />

          <Route path='/washing-machine-product-details' element={<SamsungWashProductDetails />} />
          <Route path='/washing-machine-delivery-address' element={<SamsungWashDeliveryAddress />} />
          <Route path='/washing-machine-order-summary' element={<SamsungWashOrderSummary />} />
          <Route path='/washing-machine-payment-details' element={<SamsungWashPaymentDetails />} />

          <Route path='/skybags-product-details' element={<TrollyProductDetails />} />
          <Route path='/skybags-delivery-address' element={<TrollyDeliveryAddress />} />
          <Route path='/skybags-order-summary' element={<TrollyOrderSummary />} />
          <Route path='/skybags-payment-details' element={<TrollyPaymentDetails />} />

          <Route path='/wings-earbud-product-details' element={<WingsEarbudProductDetail />} />
          <Route path='/wings-earbud-delivery-address' element={<WingsEarbudDeliveryAddress />} />
          <Route path='/wings-earbud-order-summary' element={<WingsEarbudOrderSummary />} />
          <Route path='/wings-earbud-payment-details' element={<WingsEarbudPaymentDetails />} />

          <Route path='/usha-fan-product-details' element={<UshaFanProductDetails />} />
          <Route path='/usha-fan-delivery-address' element={<UshaFanDeliveryAddress />} />
          <Route path='/usha-fan-order-summary' element={<UshaFanOrderSummary />} />
          <Route path='/usha-fan-payment-details' element={<UshaFanPaymentDetails />} />

          <Route path='/powerbank-product-details' element={<MagPowerbankProductDetails />} />
          <Route path='/powerbank-delivery-address' element={<MagPowerbankDeliveryAddress />} />
          <Route path='/powerbank-order-summary' element={<MagPowerbankOrderSummary />} />
          <Route path='/powerbank-payment-details' element={<MagPowerbankPaymentDetails />} />

          <Route path='/charger-product-details' element={<ChargerProductDetails />} />
          <Route path='/charger-delivery-address' element={<ChargerDeliveryAddress />} />
          <Route path='/charger-order-summary' element={<ChargerOrderSummary />} />
          <Route path='/charger-payment-details' element={<ChargerPaymentDetails />} />

          <Route path='/samsung-digital-product-details' element={<SamsungFridgeProductDetails />} />
          <Route path='/samsung-digital-delivery-address' element={<SamsungFridgeDeliveryAddress />} />
          <Route path='/samsung-digital-order-summary' element={<SamsungFridgeOrderSummary />} />
          <Route path='/samsung-digital-payment-details' element={<SamsungFridgePaymentDetails />} />

          <Route path='/lg-ac-product-details' element={<LgAcProductDetails />} />
          <Route path='/lg-ac-delivery-address' element={<LgAcDeliveryAddress />} />
          <Route path='/lg-ac-order-summary' element={<LgAcOrderSummary />} />
          <Route path='/lg-ac-payment-details' element={<LgAcPaymentDetails />} />

          <Route path='/jbl-earbud-product-details' element={<JblEarbudProductDetail />} />
          <Route path='/jbl-earbud-delivery-address' element={<JblEarbudDeliveryAddress />} />
          <Route path='/jbl-earbud-order-summary' element={<JblEarbudOrderSummary />} />
          <Route path='/jbl-earbud-payment-details' element={<JblEarbudPaymentDetails />} />

          <Route path='/boat-speaker-product-details' element={<BoatHomeProductDetail />} />
          <Route path='/boat-speaker-delivery-address' element={<BoatHomeDeliveryAddress />} />
          <Route path='/boat-speaker-order-summary' element={<BoatHomeOrderSummary />} />
          <Route path='/boat-speaker-payment-details' element={<BoatHomePaymentDetails />} />

          <Route path='/boat-320-product-details' element={<Boat320ProductDetail />} />
          <Route path='/boat-320-delivery-address' element={<Boat320DeliveryAddress />} />
          <Route path='/boat-320-order-summary' element={<Boat320OrderSummary />} />
          <Route path='/boat-320-payment-details' element={<Boat320PaymentDetails />} />

          <Route path='/samsung-led-product-details' element={<SamsungTvProductDetails />} />
          <Route path='/samsung-led-delivery-address' element={<SamsungTvDeliveryAddress />} />
          <Route path='/samsung-led-order-summary' element={<SamsungTvOrderSummary />} />
          <Route path='/samsung-led-payment-details' element={<SamsungTvPaymentDetails />} />

          <Route path='/oneplus-led-product-details' element={<OneplusTvProductDetails />} />
          <Route path='/oneplus-led-delivery-address' element={<OneplusTvDeliveryAddress />} />
          <Route path='/oneplus-led-order-summary' element={<OneplusTvOrderSummary />} />
          <Route path='/oneplus-led-payment-details' element={<OneplusTvPaymentDetails />} />

          <Route path='/mackbook-product-details' element={<MacLaptopProductDetails />} />
          <Route path='/mackbook-delivery-address' element={<MacLaptopDeliveryAddress />} />
          <Route path='/mackbook-order-summary' element={<MacLaptopOrderSummary />} />
          <Route path='/mackbook-payment-details' element={<MacLaptopPaymentDetails />} />

          <Route path='/oneplus-mobile-product-details' element={<OnePlusProductDetails />} />
          <Route path='/oneplus-mobile-delivery-address' element={<OnePlusDeliveryAddress />} />
          <Route path='/oneplus-mobile-order-summary' element={<OnePlusOrderSummary />} />
          <Route path='/oneplus-mobile-payment-details' element={<OnePlusPaymentDetails />} />

          <Route path='/samsungS23-product-details' element={<SamsngS23ProductDetails />} />
          <Route path='/samsungS23-delivery-address' element={<SamsngS23DeliveryAddress />} />
          <Route path='/samsungS23-order-summary' element={<SamsngS23OrderSummary />} />
          <Route path='/samsungS23-payment-details' element={<SamsngS23PaymentDetails />} />

          <Route path='/apple-watch-product-details' element={<AppleWatchProductDetails />} />
          <Route path='/apple-watch-delivery-address' element={<AppleWatchDeliveryAddress />} />
          <Route path='/apple-watch-order-summary' element={<AppleWatchOrderSummary />} />
          <Route path='/apple-watch-payment-details' element={<AppleWatchPaymentDetails />} />

          <Route path='/galaxy-flip-product-details' element={<GalaxyFlipProductDetails />} />
          <Route path='/galaxy-flip-delivery-address' element={<GalaxyFlipDeliveryAddress />} />
          <Route path='/galaxy-flip-order-summary' element={<GalaxyFlipOrderSummary />} />
          <Route path='/galaxy-flip-payment-details' element={<GalaxyFlipPaymentDetails />} />

          <Route path='/galaxy-watch-product-details' element={<GalaxyWatchProductDetails />} />
          <Route path='/galaxy-watch-delivery-address' element={<GalaxyWatchDeliveryAddress />} />
          <Route path='/galaxy-watch-order-summary' element={<GalaxyWatchOrderSummary />} />
          <Route path='/galaxy-watch-payment-details' element={<GalaxyWatchPaymentDetails />} />

          <Route path='/delivery-address' element={<DeliveryAddress />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/payment-details' element={<PaymentDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
