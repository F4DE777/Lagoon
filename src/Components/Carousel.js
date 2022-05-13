import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Confrence from '../Assets/Confrence.png'


function Carousel() {
    
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 100, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        };

        

  return (
    <>
      <Slider {...settings}>
            <SlickContent>
                <div className='cont'>
                    <div className='stories'>
                        <label>ONLY AT LAGOON SCHOOL</label>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minimx
                            veniam, quis nostrud e ercitation  x ea
                            ullamco laboris nisi ut aliquip e
                            commodo consequat.
                        </p>
                    </div>
                    <div  className='imagen'>
                        <img src={Confrence} alt="" />
                        <h4>sabella Nweze</h4>
                    </div>
                </div>
                
            </SlickContent>
           
           
      </Slider>
    </>
  )
}

export default Carousel


const SlickContent  = styled.div`

        height: 40rem;
        display:flex !important ;
        flex-direction:column ;
        align-items:center ;
        justify-content:center ;

    .cont{
        display:grid ;
        grid-template-columns: 1fr 800px;
        width:90% ;
        margin:0 auto ;

        .stories{


            label{
                color:red;
                font-size:clamp(1.3rem, 6vw, 1.5rem) ;
                position: relative;
                &::before{
                    content: '';
                    border-bottom: 5px solid red;
                    width: 9rem;
                    position: absolute;
                    bottom: 0;
                    top:30px ;
                }
            }

            p{
                font-size:clamp(1.3rem, 6vw, 1.7rem) ;
            }
        }

       
    }
    .imagen{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;


        img{
            position: relative;
            object-fit: cover;
            width: 500px !important;
            height: 300px !important;
            border-radius: 20px;
        }

        h4{
            font-size:clamp(1.3rem, 6vw, 1.7rem) ;

        }
    }
    
`