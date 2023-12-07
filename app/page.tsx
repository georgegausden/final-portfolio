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

  
  
  return (
    <main>
      
      <motion.div className='w-screen h-24 fixed bg-white dark:bg-black z-20 border-black dark:border-white border-b-2 align-middle'>
        <Header/>
      </motion.div>

      <div className='grid grid-cols-2'></div>
      <motion.div className='w-1/4 h-screen fixed bg-white dark:bg-black z-10 border-black dark:border-white border-r-2 flex items-center justify-center'>
        <p className='text-black dark:text-white p-10 text-6xl'>Hey, I'm George. I'm a freelance designer</p>
      </motion.div>
      <HorizontalScrollCarousel/>
    </main>
    
  )
  
  
}
