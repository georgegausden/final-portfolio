import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { motion, useAnimation } from "framer-motion"

// Define the types of the props
interface HeaderProps {
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  initialText: string;
}

const Header: React.FC<HeaderProps> = ({ setCardName, initialText }) => {

  const controls = useAnimation();

  const resetText = () => {
    setCardName(initialText); // Reset cardName to initialText when the function is called
  };

 

  // Define common motion properties
  const motionProps = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <header className='w-full h-full'>
      <motion.div className='flex items-center justify-between' // Add 'justify-between' here
      >
        <motion.div animate={controls} onClick={resetText}>
        <Link href={"../"}>
          <p>George Gausden</p>
        </Link>
        </motion.div>
        

        <div className='flex space-x-0'>
          <motion.div {...motionProps}><a id = "headerLink" href='https://www.instagram.com/georgegausden/' target="_blank">Instagram</a></motion.div>
          <motion.div {...motionProps}><a id = "headerLink" href='https://www.linkedin.com/in/george-gausden-a0246429b/' target="_blank">LinkedIn</a></motion.div>
          <motion.div {...motionProps}><a id = "headerLink" href='mailto:george.philip.gausden@gmail.com' target="_blank">Email</a></motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
