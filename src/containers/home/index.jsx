import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './style.scss';


const Home = () => {

  // const navigate = useNavigate();
  // const handleNavigateToContactMePage =() =>{
  //   navigate("/contact");
  // };

  /* Change url to masssolution portfolio */
  const handleNavigateToContactMePage = () => {
    window.location.href = "https://kmohanachary.masssolution.in/";
  };



  return (
    <>
     <section id="home" className="home">
     {/* <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform:"translateY(550px)"
      }}

      end={{
        transform:"translateX(0px)"
      }}
     
     >
      <div className='home__text-wrapper'>
          <h1>
            Hello I'm Mohan 
            <br/>
            Frontend Developer
          </h1> 
        </div>

     </Animate> */}
      
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform:"translateY(550px)"
        }}

        end={{
          transform:"translateX(0px)"
        }}


      >

        <div className='home__text-wrapper'>
          <h1>
            Hello I'm Mohan 
            <br/>
            Frontend Developer
          </h1> 
        </div>

        <div className='home__contact-me'>
          {/* <button onClick={handleNavigateToContactMePage}> Hire Me </button>  */}
          {/* Change Button click to my website */}
          <button onClick={handleNavigateToContactMePage}> Go To My Portfolio </button> 
        </div>
      </Animate>
     </section>

    </>
  )
}

export default Home;