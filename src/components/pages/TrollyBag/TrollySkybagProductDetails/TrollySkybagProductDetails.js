import React, { useEffect, useRef, useState } from 'react'
import './TrollySkybagProductDetails.scss'
import { Col, Container, Row } from 'reactstrap'
import Slider from 'react-slick';
import Heart from '../../../../assets/images/product-details/love.webp'
import Share from '../../../../assets/images/product-details/share.webp'
import TrollyBag from '../../../../assets/images/product-details/trollary-bag.jpg'
import Replacement from '../../../../assets/images/product-details/replace.png'
import Nocash from '../../../../assets/images/product-details/no-cash.jpeg'
import Assured from '../../../../assets/images/product-details/plue-fassured.png'
import Bag1 from '../../../../assets/images/product-details/bag.jpeg'
import Bag2 from '../../../../assets/images/product-details/bag_1.jpeg'
import { Link } from 'react-router-dom'

const TrollySkybagProductDetails = () => {

    const [minutes, setMinutes] = useState(16);
    const [seconds, setSeconds] = useState(30);

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    var smallslider = {
        // dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 1,
        // slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    

    useEffect(() => {
        let timer = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer); // Timer reached 00:00, stops the timer
                alert("Time is over")
            } else {
                if (seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);
    return (
        <>
            <div className="products-tab">
                <Container>
                <div className="product-icons">
                    <div className="icon"><img src={Heart} alt="Heart" width={30} height={30} /></div>
                    <div className="icon"><img src={Share} alt="Share" width={30} height={30} /></div>
                </div>
                    <div className="products-slider">
                        <Row className='justify-content-center topslider'>
                            <Col className='col-lg-4 col-md-6 col-sm-6'>
                                <Slider
                                    className="mainSlider"
                                    asNavFor={nav2}
                                    dots={true}
                                    arrows={false}
                                    ref={(slider1) => setNav1(slider1)}
                                >
                                    <div className='big-img-slider'>
                                        <img src={TrollyBag} alt="Iphone" height={450} width={"100%"} />
                                    </div>
                                    
                                    
                                </Slider>
                            </Col>
                        </Row>
                        <Row className='btmslider'>
                            <Col>
                                <Slider
                                    {...smallslider}
                                    className=""
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    <div className='small-img'>
                                        <img src={TrollyBag} alt="Iphone" width={40} />
                                    </div>
                                    
                                </Slider>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="product-select">
                <Container>
                    <Row className='product-des'>
                        <Col >
                            <div className='card'>
                                <div class="product-title"> Skybags Rubik Red So...  Red</div>
                                <img src={Assured} alt="Assured" className='my-2' width={100} />
                                <p class="text-success des">
                                    <b>2% off</b>
                                    <del class="text-dark"> ₹ 4000</del>
                                    <span class="text-dark"> ₹ 699</span>
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div class="timer text-center">
                        <p>Offer Ends In </p>
                        <div class="countdown" id="countdown">{`${minutes.toString().padStart(2, '0')}min ${seconds.toString().padStart(2, '0')}sec`}</div>
                    </div>
                </Container>
                <div className="card"></div>
            </div>


            <div className="product-det">
                <Container>
                    <h4 class="my-3">Product Detail</h4>
                    <div className="card">
                        <Row>
                            <Col className='col-4'>
                                <img class="featured-img mb-3" src={Replacement} alt="Replacement" width={40} height={40}/>
                                <span class="feature-title"> 7 days Replacement </span>
                            </Col>
                            <Col className='col-4'>
                                <img class="featured-img mb-3" src={Nocash} alt="Nocash" width={40} height={40}/>
                                <span class="feature-title"> No Cash On Delivery </span>
                            </Col>
                            <Col className='col-4'>
                                <img class="featured-img mb-3" src={Assured} alt="Assured" width={70} />
                                <span class="feature-title"> 7 Plus (F-Assured)  </span>
                            </Col>
                        </Row>
                    </div>

                    <div className="img-container card">
                        <img className='mb-sm-5 mb-3' src={Bag1} alt="WonderFull" />
                        <img className='mb-sm-5 mb-3' src={Bag2} alt="Ahuge" />
                    </div>
                </Container>
            </div>


        </>
    )
}

export default TrollySkybagProductDetails