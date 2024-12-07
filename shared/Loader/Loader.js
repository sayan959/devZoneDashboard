import React from 'react';
import './style.Loader.css';
import logo from '@/public/logo.png';
import Particles from 'react-tsparticles';
import ParticlesConfig from '@/components/config/ParticlesConfig';
import Image from 'next/image';

console.log("ParticlesConfig in Loader:", ParticlesConfig);

const Loader = () => {
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

export default Loader;