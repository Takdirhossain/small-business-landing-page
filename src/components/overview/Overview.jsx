import React from 'react';
import "./overview.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../assets/pexels-andrea-piacquadio-3807386.jpg"
import slide2 from "../../assets/pexels-cottonbro-studio-4489732.jpg"
import slide3 from "../../assets/pexels-cottonbro-studio-4489749.jpg"
import slide4 from "../../assets/pexels-malte-luk-2244746.jpg"
const Overview = () => {
    return (
        <Carousel className='mainslider' showThumbs={false} autoPlay>
          <div className='sider'>
            <img src={slide1} alt=""  width="200px"/>
            <div className='sidedis'>
            <h2>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages <br /> of  available, but the majority have <br /> suffered alteration in some form</p>
            <button className='discover'>Discover more</button>
            <button className='buynow'>Book now</button>
            </div>
          </div>
          <div className='sider'>
            <img src={slide2} alt=""  width="200px"/>
            <div className='sidedis'>
            <h2>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages <br /> of  available, but the majority have <br /> suffered alteration in some form</p>
            <button className='discover'>Discover more</button>
            <button className='buynow'>Book now</button>
            </div>
          </div>
          <div className='sider'>
            <img src={slide3} alt=""  width="200px"/>
            <div className='sidedis'>
            <h2>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages <br /> of  available, but the majority have <br /> suffered alteration in some form</p>
            <button className='discover'>Discover more</button>
            <button className='buynow'>Book now</button>
            </div>
          </div>
          
        </Carousel>
    );
};

export default Overview;