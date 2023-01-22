import {  ArrowCircleRight, Key } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import "./service.css"

const Service = () => { 
    const [data, setdata] = useState([])
    useEffect(() => {
fetch("https://uptech-server-takdirhossain.vercel.app/newcarservice")
.then(res => res.json())
.then(data => setdata(data))
    }, [])
    console.log(data)
    return (
        <div className='allservices'>
            <h2>Our Service Area</h2>
            <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='service-wrapper'>
              {
                data.map(service => (
                    < >
                     <div className='service'>
               <img className='serviceimg' src={service.image} alt="" />
                <div className='service-dis'>
                    <h3 className='service-title'>{service.name}</h3>
                    <div className='servicedetails'>
                        <h3 className='service-price'>{service.price}</h3>
                       <ArrowCircleRight className='icons'/>
                    </div>
                </div>
               </div>
                    </>
                ))
              }
               
               
            </div>
        </div>
    );
};

export default Service;