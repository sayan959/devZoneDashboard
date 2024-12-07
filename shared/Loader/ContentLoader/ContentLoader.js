import React from 'react';
import './style.ContentLoader.css';
import logo from '@/public/logo.png';
import Image from 'next/image';

const ContentLoader = () => {
  return (
    <div>
      <div className='content-loader'>
        <div className="loader-box">
        </div>
        <Image src={logo} width={70} height={60} alt="web developers" />
      </div>
    </div>
  );
};

export default ContentLoader;