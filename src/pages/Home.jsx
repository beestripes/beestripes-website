import React from 'react';
import tokens from "../tokens";

const Home = () => {
  return (
    <div className={'element-animated fade-in short'}>
      <div className={'block font-medium'}>
        <h2 className="text-6xl text-black" style={{ fontFamily: tokens.fontFamily.jungkaMedium }}>
        <span className={'block'}>
          <span style={{ color: 'red' }}>_we</span> build products that
        </span>
          <span className={'block'}>test ideas</span>
        </h2>
        <div className={'mt-20 text-black'} style={{ fontFamily: tokens.fontFamily.jungkaLight }}>
          <p className="text-2xl pb-6 leading-normal">We swarm with you to test and validate your business ideas.</p>
          <p className="text-2xl pb-6 leading-normal">We can build the tech to take your product to market – iOS and Android apps, web sites, web services or web apps. Other ideas? challenge us.</p>
          <p className="text-2xl pb-6 leading-normal">We know starting a business is a leap and can be lonely. <span style={{ fontFamily: tokens.fontFamily.jungkaMedium }}>Let's startup together!</span></p>
        </div>
      </div>
    </div>
  )
}

export default Home;
