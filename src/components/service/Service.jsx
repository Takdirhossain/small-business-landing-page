import {  ArrowCircleRight } from '@mui/icons-material';
import "./service.css"

const Service = () => {
    return (
        <div className='allservices'>
            <h2>Our Service Area</h2>
            <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='service-wrapper'>
               <div className='service'>
               <img className='serviceimg' src="https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original" alt="" />
                <div className='service-dis'>
                    <h3 className='service-title'>Engine Repier</h3>
                    <div className='servicedetails'>
                        <h3 className='service-price'>Price: 200$</h3>
                       <ArrowCircleRight className='icons'/>
                    </div>
                </div>
               </div>
               <div className='service'>
               <img className='serviceimg' src="https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original" alt="" />
                <div className='service-dis'>
                    <h3 className='service-title'>Engine Repier</h3>
                    <div className='servicedetails'>
                        <h3 className='service-price'>Price: 200$</h3>
                       <ArrowCircleRight className='icons'/>
                    </div>
                </div>
               </div>
               <div className='service'>
               <img className='serviceimg' src="https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original" alt="" />
                <div className='service-dis'>
                    <h3 className='service-title'>Engine Repier</h3>
                    <div className='servicedetails'>
                        <h3 className='service-price'>Price: 200$</h3>
                       <ArrowCircleRight className='icons'/>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Service;