import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Store } from '.'
import Player from '@vimeo/player';
import soundmuted from '../img/sound-muted.svg'
import soundon from '../img/sound-on.svg'

// styles

const MainWrap = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 98;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
`;

const Cover = styled.div`
    color: white;
    background-color: ${(props) => props.theme.altBackgroundColor};
    overflow: hidden;
    flex: 4;
    height: 100vh;
    width: 100vw;
    align-self: stretch;
    text-align: center;

h1{
    position: absolute;
    z-index: 98;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4vmin;
}

p{
    position: absolute;
    z-index: 98;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2vmin;
}

img{
    position: absolute;
    z-index: 98;
    top: 95%;
    left: 5%;
    }

.iframe-container {
    height: 100%;
    overflow: hidden;
    padding: 0;
    position: relative;
    }

iframe{
    box-sizing: border-box;
    height: 56.25vw;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    width: 177.77777778vh;
  }

  @media only screen and (max-width: 767px){
    h1{
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0px;
        font-size: 10vmin;
        width: 100%;
    }

    p{
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 6vmin;
        padding:5px;
        margin: 0px;
        width: 99%;
    }
    .iframe-container {
        visibility: hidden;
    }
    }


`;

const StyledLink = styled.a`
    background-color: ${(props) => props.theme.altAccentColor};
    background: linear-gradient(to right,  ${(props) => props.theme.acOverlayDark} 50%, ${(props) => props.theme.altAccentColor} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .3s ease-out;
    color: white;
    text-decoration: none;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 98;
    white-space: nowrap;
    width: 40%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

h2{
    font-size: 2vmin;
    font-weight: bold;

}

&:focus, &:active, &:hover{
  text-decoration: none;
}

&:hover{
    background-position: left bottom;
}


@media only screen and (max-width: 767px){
        width: 100%;
        top: 80%;
        h2{
            font-size: 5vmin;
        }
    }
`;

const Contact = styled.div`
    color: white;
    text-align: center;
    background-color: ${(props) => props.theme.altAccentColor};
    border-radius: 0px;
    width: 100%;
    flex: 2;
    padding: 0px 10px 10px 10px;

    h1{
        font-size: 3vmin;
        width: 100%;
        margin: 10px;
    }

    a{
        color: white;
        font-size: 2vmin;
        text-align: center;
        width: 100%;
    }

    @media only screen and (max-width: 767px){
        a{
            font-size: 4vmin;
        }
        h1{
            font-size: 6vmin;
            width: 100%;
            margin: 5px;
     }
    }
`;

const Purpose = styled.div`
    color: black;
    text-align: center;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 0px;
    margin-bottom: 20px;
    width: 100%;
    flex: 2;
    padding-top: 10px;

    p{
        font-size: 2vmin;
        margin: 0 80px 0 80px;
    }

    h1{
        font-size: 3vmin;
        width: 100%;
        margin: 10px;
     }

    @media only screen and (max-width: 767px){
        p{
            font-size: 4vmin;
            margin: 0 30px 0 30px;
        }
        h1{
            font-size: 6vmin;
            width: 100%;
            margin: 5px;
     }
    }
`;
const About = styled.div`
    color: white;
    text-align: center;
    background-color: ${(props) => props.theme.altBackgroundColor};
    border-radius: 0px;
    width: 100%;
    flex: 2;
    padding: 20px 0px 30px 0px;

    h1{
            font-size: 4vmin;
            width: 100%;
            margin: 10px;
        }
        p{
            font-size: 2vmin;
            margin: 0 20px 0 20px;
        }


    @media only screen and (max-width: 767px){
        h1{
            font-size: 6vmin;
            margin: 5px;
        }
        p{
            font-size: 4vmin;
            margin: 0 10px 0 10px;
        }
    }

`;

const CBD = styled.div`
    color: black;
    text-align: left;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 0px;
    width: 80%;
    flex: 2;
    padding: 10px 0px 20px 0px;

h1{
    text-align: center;
    font-size: 3vmin;
    width: 100%;
    margin: 10px;
}

p{
    font-size: 2vmin;
    margin: 0 30px 0 30px;
}

@media only screen and (max-width: 767px){
        width: 100%;
        p{
            font-size: 4vmin;
            margin: 0 30px 0 30px;
        }
        h1{
            font-size: 6vmin;
            width: 100%;
            margin: 5px;
     }
    }
`;

//JSX

function Homepage(props) {
    const storeRef = useRef(null);
    const vidRef = useRef(null);
    var player;

    const [mute, setMute] = useState(true);

    function controlPlayer(){
        player = new Player(vidRef.current);
        player.on('play', function() {
            console.log('Cover Video Playing');
        });
    }

    function changeVol(){
        setMute(!mute);
        mute ? player.setVolume(0.5) : player.setVolume(0);
    }

    const scrollToStore = () => {
        storeRef.current.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        (window.screen.width > 767) && controlPlayer();
    });

  return (
    <MainWrap>
        <Cover>
             <div className="iframe-container">
                <iframe title="cover"src="https://player.vimeo.com/video/371399670?background=1?api=1" frameBorder="0" scrolling="no" allow="autoplay;  fullscreen" allowFullScreen ref={vidRef}></iframe>
            </div>
                { (window.screen.width > 767) ? <img src={mute ? soundmuted : soundon} onClick={changeVol} alt=""></img>: "" }
            <h1>ON THE SQUARE ENTERPRISES</h1>
            <p>
                On the Square Enterprises is proud to provide trusted and tested Veteran Farmed CBD products to our Brothers and their families.
                Type in discount code 10OFF at checkout for a 10% discount on your order!
                </p>
            <StyledLink onClick={scrollToStore}><h2>THC Free and Pure CBD Products</h2></StyledLink>
        </Cover>
        <div ref={storeRef}><Store></Store></div>
        <Purpose>
            <h1>Our Purpose</h1>
            <p>
                The purpose of On The Square Enterprises is to provide the highest quality CBD products to our Freemason brothers and their families who otherwise may not have had exposure to alternative remedies in the past. 
                From athletes, to arthritis sufferers, people around the world are enjoying the benefits of CBD for countless afflictions. 
                Products containing CBD have been shown to reduce inflammation, assist with pain management and relief, and even reduce insomnia.<br></br><br></br>
                On The Square Enterprises exclusively promotes ON DUTY CBD products because we use them ourselves, trust their processes and feel the benefits everyday. 
                On Duty is a Veteran farmed, Veteran operated business on a mission to provide you with sustainably farmed health and wellness products. 
                We are proud to bring you trusted products that are distilled with American values from the farm to your door.<br></br><br></br>
                We hope you feel the benefits of the ON DUTY CBD products and are offering a 10% discount to all Members of the Masonic Order and their families. 
                Additionally, a portion of all profits will be donated to Masonic Charities.
            </p>
        </Purpose>
        <About>
            <h1>About On Duty CBD</h1>
            <p>
                ON Duty CBD Products originate from small farms operated by American Veterans who raise their crops like they served: with HONOR and INTEGRITY. 
                On the Square Enterprises is proud to partner with ON Duty CBD to bring Veteran Farmed CBD Products to our Brothers and their families. 
                On Duty products follow an organic process that can be tracked from the farm your door– this means zero pesticides, zero chemicals, and zero heavy metals. 
                Each On Duty product is labeled with a QR code providing you 24/7 access to a multi-page 3rd party lab report. Our products, like our Veteran Farmers, are always On Duty!
            </p>
        </About>
        <CBD>
            <h1>About CBD</h1>
            <p>
                Is CBD Legal? Yes, the United States Farm Bill of 2018 classified plants containing less than 0.3% THC as industrial hemp, making CBD legal in all 50 states. 
                At on Duty, our CBD products are produced under a license from the Kentucky Department of Agriculture’s Industrial Hemp Research Program and can be shipped directly to your door. <br></br><br></br>
                What is the difference between Pure and THC Free CBD Products? Our Pure (full spectrum) CBD oil contains a full range of beneficial plant extracts — including a very small percentage 
                {`(<0.3%)`} of THC — which work together to produce lasting effects when interacting with the endocannabinoid system. 
                Though On Duty CBD products are produced under strict quality protocols and third party testing, we are proud to offer a ZERO THC blend to those who may have extra sensitivities 
                to THC or are simply looking for a taste-neutral experience. <br></br><br></br>
                What is the suggested usage for CBD Oil and/or other products? We recommend a "start low and go slow" approach for both humans and pets. 
                Below are our recommended usage instructions for our most popular products.<br></br><br></br>
                Oils - Start with 1/2 dropper of oil under the tongue once in the morning and once in the evening for adults. For best results, hold the oil under the tongue for 30 seconds before swallowing. Increase to 1 full dropper, as needed. <br></br>
                Lotions - Apply a nickel-sized amount to the area of interest. Use liberally as needed.<br></br>
                Rollers - Apply a small amount (1-2 swipes) directly to area of interest, as needed.<br></br>
                Pets - Administer 1/4 dropper of oil (0.25 mL or about 5 drops) per 10 lbs of pet weight once per day.
            </p>
        </CBD>
        <Contact>
            <h1>Contact Us</h1>
            <a href="mailto:info@onthesquarecbd.com">info@onthesquarecbd.com</a>
        </Contact>
    </MainWrap>

    );
  }

export default withRouter(Homepage);