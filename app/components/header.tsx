import React from 'react';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { motion } from "framer-motion"





const Header = () => {
  return (
    <header>
      <motion.div className='flex items-center'
      >
        <Link href={"../"}>
          <p id='textHeader'>George Gausden</p>
        </Link>

        <div className='flex space-x-4'>
          <motion.div whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}><a id = "headerLink" href='https://www.instagram.com/georgegausden/'>Instagram</a></motion.div>
          <motion.div whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}><a id = "headerLink" href='https://www.linkedin.com/in/george-gausden-a0246429b/'>LinkedIn</a></motion.div>
          <motion.div whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}><a id = "headerLink" href='mailto:george.philip.gausden@gmail.com'>Email</a></motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
