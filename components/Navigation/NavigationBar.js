import React from 'react'
import Link from 'next/link';
import { RESUME_FILE_NAME } from '../../global/constants/constants'

const style =
'transform translate transition-all hover:underline hover:text-pink focus:text-pink outline-none font-bold'


const NavigationBar = () => {
  return (
    <div className="top-0 absolute w-full z-10 text-green flex justify-end space-x-4 p-4">
      <Link 
          href={`/${RESUME_FILE_NAME}`}
          className={style}>
          RESUME     
        </Link>
        <Link
          href='/#experience'
          className={style}
        >
          EXPERIENCE
        </Link>
        <Link
          href='/#projects'
          className={style}
        >
          PROJECTS
        </Link>
        <Link
          href='/#inspiration'
          className={style}
        >
          INSPIRATION
        </Link>
        <Link
          href='/#blog'
          className={style}
        >
          BLOG
        </Link>
        <Link 
          href="/#about"
          className={style}>
          ABOUT     
        </Link>
    </div>
  );
};

export default NavigationBar;