"use client";
import "./style.WhyChoose.css";
import CountUpOnScroll from '@/components/CountUpOnScroll/CountUpOnScroll';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/public/logo.png';
import img1 from '@/public/choose-img-1.png';

const WhyChoose = () => {

  const paragap = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="why-choose">
      <div className="container">
        <div className="heading">
          <div className="flex justify-center item-start">
            <div className="w-50 choose-title text-start">
              <h6 className="text-primary font-secondary flex item-center gap-5">
                <span></span> Why Choose Us
              </h6>
              <h3 className="text-white-secondary font-secondary">
                Unlock The Potential Of Your Business
              </h3>
            </div>
            <div className="w-50 choose-banner relative">
              <Image width={575} height={373} src={img1} alt="web developers" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="flex justify-center item-start parent">
            <div className="content-text">
              <div className="main-box">
                <div className="flex justify-end">
                  <div className="box-style-1"></div>
                </div>
                <div className="main-content">
                  <div className="choose-logo flex item-center gap-10">
                    <Image width={40} height={35} src={logo} alt="web developers" />
                    <h5 className="text-white font-primary f-bold-x">
                      Dev<span className="text-primary">Zone</span> IT
                    </h5>
                  </div>
                  <h4 className="text-white font-primary">
                    Best Creative IT Agency And Solutions{" "}
                    <span className="text-primary">Since 2019</span>
                  </h4> <p className="text-white-secondary font-primary">
                    Experience excellence since 2014: <br />
                    Since 2014, our agency has been a beacon of excellence in
                    web development, boasting over a decade of unparalleled
                    expertise. Our seasoned professionals specialize in crafting
                    cutting-edge solutions tailored specifically to your needs,
                    propelling your business to new heights. Our commitment to
                    innovation distinguishes us as we consistently embrace the
                    latest technologies to deliver tangible results. With a
                    client-centric approach at the heart of everything we do, we
                    prioritize forging long-term relationships built on trust
                    and transparency. Your success is our success.
                  </p>
                  <h2 className="font-secondary">#1</h2>
                  <div className="absolute content-text-btn">
                    <Link href={"/about"} className="round-btn flex item-center justify-center font-primary" >
                      <svg width="7" height="7" viewBox="0 0 13 13" stroke="#fff" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                      </svg>
                      About More
                    </Link>
                  </div>
                </div>
                <div className="flex justify-start bottom-box">
                  <div className="box-style-2 relative">
                    <div className="box-1 absolute"></div>
                    <div className="box-2 absolute"></div>
                    <div className="box-3 absolute"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-count">
              <div className="text-white">
                <div className="flex item-center gap-15 justify-start padding">
                  <div className="w-20 counter-div-size">
                    <div className="counter flex item-center justify-center">
                      <CountUpOnScroll number={100}></CountUpOnScroll> %
                    </div>
                  </div>
                  <div className="w-80 counter-div-size">
                    <div className="count-content">
                      <h5 className="font-secondary text-white-secondary">
                        Strategy
                      </h5>
                      <p style={isOpen ? null : paragap} className="text-white-secondary font-secondary" >
                        As a web development agency, our strategies revolve
                        around delivering top-notch solutions that cater to the
                        unique needs of our clients. Here's how we approach our
                        work: <br />
                        1. Customized Solutions: We understand that every
                        business is different, which is why we tailor our
                        solutions to meet the specific requirements of each
                        client. By taking the time to understand your goals and
                        objectives, we ensure that our solutions align perfectly
                        with your vision. <br /> 2. Innovative Technologies:
                        Innovation is at the core of our approach. We stay
                        updated with the latest technologies and trends in web
                        development to provide our clients with cutting-edge
                        solutions that give them a competitive edge in the
                        digital landscape.
                        <br /> 3. Responsive Design: In today's mobile-first
                        world, we prioritize responsive design to ensure that
                        your website looks and functions flawlessly across all
                        devices and screen sizes. This approach not only
                        enhances user experience but also boosts your search
                        engine rankings.
                        <br /> 4. SEO Optimization: We incorporate search engine
                        optimization (SEO) best practices into our development
                        process to improve your website's visibility and drive
                        organic traffic. From keyword research to on-page
                        optimization, we help you climb the search engine
                        rankings and reach your target audience effectively.{" "}
                        <br /> 5. Continuous Support: Our relationship with
                        clients doesn't end after the website launch. We provide
                        ongoing support and maintenance to ensure that your
                        website remains secure, up-to-date, and optimized for
                        performance.
                        <br /> By combining these strategies, we empower our
                        clients to achieve their business objectives and thrive
                        in the competitive online landscape.
                      </p>
                      <button className="bg-white trans-0 read-more f-semibold" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Read less ..." : "Read more ..."}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex item-center gap-15 justify-start padding">
                  <div className="w-20 counter-div-size">
                    <div className="counter flex item-center justify-center">
                      <CountUpOnScroll number={80}></CountUpOnScroll> %
                    </div>
                  </div>
                  <div className="w-80 counter-div-size">
                    <div className="count-content">
                      <h5 className="font-secondary text-white-secondary">
                        Audience
                      </h5>
                      <p className="text-white-secondary font-secondary">
                        Connecting Beyond Boundaries: Audience-Centric Solutions
                        Since 2019. Tailoring experiences, we bridge gaps and
                        foster engagement. Elevate your outreach with our
                        audience-focused strategies, making lasting connections
                        in the digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex item-center gap-15 justify-start padding">
                  <div className="w-20 counter-div-size">
                    <div className="counter flex item-center justify-center">
                      <CountUpOnScroll number={90}></CountUpOnScroll> %
                    </div>
                  </div>
                  <div className="w-80 counter-div-size">
                    <div className="count-content">
                      <h5 className="font-secondary text-white-secondary">
                        Keyword
                      </h5>
                      <p className="text-white-secondary font-secondary">
                        Keyword Mastery: Unlocking Digital Potential Since 2019.
                        Elevate your online presence with our strategic keyword
                        solutions. From optimization to visibility, we empower
                        your digital success with targeted keyword expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;