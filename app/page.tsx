'use client'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react';

import Image from 'next/image'
import YouTube from "react-youtube";
import InstagramIcon from "./instagram.svg";
import Header from "./components/header"

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import ArrowIcon from '../public/arrow.svg';
import HorizontalScrollCarousel from './components/horizontalScroll';

export default function Home() {

  const initialText = `Hi, I'm George. I'm a multidisciplinary digital artist based in Montreal. I'm currently studying Computation Arts at Concordia Univeristy.` 
  const [cardName, setCardName] = useState(initialText);
  
  
  return (
    <main>
      
      <motion.div className='w-screen h-[10%] fixed bg-red dark:bg-black z-20 border-black dark:border-white border-b-2 align-middle'>
        <Header setCardName={setCardName} initialText={initialText}/>
      </motion.div>

      <div className='grid grid-cols-2'></div>
      <motion.div className='w-1/4 fixed bg-white h-screen translate-y-[10%] dark:bg-black z-10 border-black dark:border-white border-r-2 flex items-start justify-center overflow-auto'>
  <AnimatePresence mode='wait'>
    <motion.p 
      key={cardName}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: "spring", duration: 0.5 }}
      className='text-black dark:text-white p-10 text-3xl text-justify bg-white'
    >
      {cardName}
    </motion.p>
  </AnimatePresence>
</motion.div>

      <HorizontalScrollCarousel setCardName={setCardName}/>
    </main>
    
  )
  
  
}
