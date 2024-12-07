"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import './style.about.css';
import aboutbnr1 from '@/public/abouthead.png';
import aboutbnr2 from '@/public/abouthead1.png';
import approach1 from '@/public/approach.png';
import approach2 from '@/public/approach2.png';
import approach3 from '@/public/approach3.png';
import WhyChoose from '@/components/WhyChoose/WhyChoose';
import Reviews from '@/components/Reviews/Reviews';
import ReviewSlide from '@/components/Reviews/ReviewSlide/ReviewSlide';
import Team from '@/components/Team/Team';
import ShortContact from '@/components/ShortContact/ShortContact';


const About = () => {

  useEffect(() => {

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.title = "DevZone IT | About"
    }
  }, [])

  return (
    <div className='about-page'>
      <div className="about-head relative">
        <div className="container">
          <p className='font-secondary'>About</p>
          <h3 className='text-white-secondary f-bold font-secondary text-center'>Get To Know About Web Dev IT</h3>
        </div>
        <Image className='abouth1' width={164} height={210} src={aboutbnr1} alt="web developers" />
        <Image className='abouth2' width={250} height={191} src={aboutbnr2} alt="web developers" />
      </div>

      <div className="approach">
        <div className="container">
          <div className="flex item-start approach-main-section">
            <div className="w-75 approach-main">
              <div className="approach-main-head">
                <h3 className='font-primary f-bold-x'>Our Approach</h3>
                <p className='font-secondary text-white-secondary'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget</p>
              </div>
              <div className="flex justify-center item-start gap-25 approach-content-main">
                <div className="w-45 main-img">
                  <div className="main-image w-100">
                    <Image className='w-100' width={399.66} height={428.06} src={approach1} alt="web developers" />
                  </div>
                </div>
                <div className="w-55 main-content">
                  <h4 className='font-primary'>Unlock The Potential Of Your Business</h4>
                  <p className='font-secondary text-white-secondary'>We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals</p>
                  <div className="w-100 bg-white relative line">
                    <div className="ball1"></div>
                    <div className="ball2"></div>
                  </div>
                  <ul className="about-feature">
                    <li>
                      <h5>Customized Solutions</h5>
                      <p>Tailored Web and Software Solutions: Precision, Perfection, Performance.</p>
                    </li>
                    <li>
                      <h5>Quality Reliability</h5>
                      <p>Reliable Quality Solutions: Consistency, Assurance, Excellence.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-25 approach-add">
              <Image className='w-90 mx-auto photo-approach2' width={297.5} height={315} src={approach2} alt="web developers" />
              <div className="ex relative bg-primary flex item-center justify-center flex-col">
                <Image className='ex-title' width={153} height={153} src={approach3} alt="web developers" />
                <h4>4</h4>
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Team></Team>
      <WhyChoose></WhyChoose>
      <Reviews>Reviews</Reviews>
      <ReviewSlide></ReviewSlide>
    </div>
  );
};

export default About;