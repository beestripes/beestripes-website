import React, { useState, useEffect } from 'react';
import tokens from "../tokens";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const steps = {
  'init': {
    initial: { opacity: 0, y: 50 },
  },
  'enter': {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'circOut', delay: 0.2 },
  },
}

const Home = ({ onEnter }) => {
  const [animationProps, setAnimationProps] = useState(steps['init']);
  const isMd = useMediaQuery({ query: '(min-width: 768px)' })


  useEffect(() => {
    setAnimationProps(steps['enter'])
  }, [onEnter]);

  return (
    <motion.div {...animationProps} className={'block font-medium'}>
      <h2 className="pt-20 text-4xl md:pt-0 md:text-6xl text-black" style={{ fontFamily: tokens.fontFamily.jungkaMedium }}>
        {isMd
          ? (
            <>
              <span className={'block'}><span style={{ color: 'red' }}>_we</span> build products that</span>
              <span className={'block'}>test ideas</span>
            </>
          )
          : (
            <span><span style={{ color: 'red' }}>_we</span> build products that test ideas</span>
          )
        }
      </h2>
      <div className={'mt-14 md:mt-20 text-black'} style={{ fontFamily: tokens.fontFamily.jungkaLight }}>
        <p className="text-xl md:text-2xl pb-6 leading-normal">We swarm with you to test and validate your business ideas.</p>
        <p className="text-xl md:text-2xl pb-6 leading-normal">We can build the tech to take your product to market – iOS and Android apps, web sites, web services or web apps. Other ideas? challenge us.</p>
        <p className="text-xl md:text-2xl pb-6 leading-normal">We know starting a business is a leap and can be lonely. <span style={{ fontFamily: tokens.fontFamily.jungkaMedium }}>Let's startup together!</span></p>
      </div>
    </motion.div>
  )
}

export default Home;
