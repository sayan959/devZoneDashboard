"use client"

import React, { useEffect, useState } from 'react';
import './Menubar.css';
import '../../Dashboard.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

const Menubar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "DevZone IT | Dashboard";
    }, []);
    const [width, setWidth] = useState(0);
    const [sideMenu, setSideMenu] = useState(15);
    const [topMenu, setTopMenu] = useState(85);
    const [dNone, setDNone] = useState("block");
    const [position, setPosition] = useState("fixed");
    const [screenWidth, setScreenWidth] = useState(null);
    //For browser load ---------- don't work server side 
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const handleResize = () => {
    //     setScreenWidth(window.innerWidth);
    // };

    //--------For server site data load--------
    useEffect(() => {
        // Accessing `window` safely
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    // useEffect(() => {
    //     setScreenWidth(window.innerWidth);
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    useEffect(() => {
        if (screenWidth > 1200) {
            setSideMenu(15);
            setTopMenu(85);
            setWidth(85);
            setDNone("block");
        } else if (screenWidth > 992) {
            setSideMenu(10);
            setTopMenu(90);
            setWidth(90);
            setDNone("none");
        } else {
            setSideMenu(0);
            setTopMenu(100);
            setWidth(100);
            setDNone("block");
        }
    }, [screenWidth, setWidth]);

    const sideMenuChange = () => {
        if (screenWidth > 1200) {
            if (sideMenu == 15 && topMenu == 85) {
                setSideMenu(5);
                setTopMenu(95);
                setWidth(95);
                setDNone("none");
                setPosition("fixed");
            } else {
                setSideMenu(15);
                setTopMenu(85);
                setWidth(85);
                setDNone("block");
                setPosition("fixed");
            }
        } else if (screenWidth > 992) {
            if (sideMenu == 10 && topMenu == 90) {
                setSideMenu(20);
                setTopMenu(80);
                setWidth(90);
                setDNone("block");
                setPosition("absolute");
            } else {
                setSideMenu(10);
                setTopMenu(90);
                setWidth(90);
                setDNone("none");
                setPosition("fixed");
            }
        } else if (screenWidth > 576) {
            if (sideMenu == 0 && topMenu == 100) {
                setSideMenu(10);
                setTopMenu(90);
                setWidth(100);
                setDNone("none");
                setPosition("absolute");
            } else {
                setSideMenu(0);
                setTopMenu(100);
                setWidth(100);
                setDNone("none");
                setPosition("fixed");
            }
        } else {
            if (sideMenu == 0 && topMenu == 100) {
                setSideMenu(15);
                setTopMenu(85);
                setWidth(100);
                setDNone("none");
                setPosition("absolute");
            } else {
                setSideMenu(0);
                setTopMenu(100);
                setWidth(100);
                setDNone("none");
                setPosition("fixed");
            }
        }
    }

    const [topMsg, setTopMsg] = useState(0);
    const [rightMsg, setRightMsg] = useState(0);
    const [sclMsg, setSclMsg] = useState(0);

    const MessageView = () => {
        if (topMsg == 0 && rightMsg == 0 && sclMsg == 0) {
            setTopMsg("55px");
            setRightMsg(0);
            setSclMsg(1);
        } else {
            setTopMsg(0);
            setRightMsg(0);
            setSclMsg(0)
        }
    }

    return (
        <div className='dashboard-header '>
            <div className="head">
                <ul className={`side-menu dash-w-${sideMenu} ${position}`}>
                    <li className="dash-logo">
                        <Image src={logo} alt="web developer" width={50} height={50} />
                        <div style={{ display: dNone }}>
                            <h4>
                                <span>D</span>
                                <span>e</span>
                                <span>v</span>
                                <span className='text-primary'>Z</span>
                                <span className='text-primary'>o</span>
                                <span className='text-primary'>n</span>
                                <span className='text-primary'>e</span>
                                <span className='space'>I</span>
                                <span>T</span>
                            </h4>
                        </div>

                    </li>
                    <li className="admin-profile">
                        <div className="profile-img">
                            <Image src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" width={100} height={100} alt="web developer" />
                        </div>
                        <h5 style={{ display: dNone }}>Admin Name</h5>
                    </li>
                    <li><Link href='/dashboard/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                        <span style={{ display: dNone }}>Dashboard</span>
                    </Link></li>
                    <li><Link href="/dashboard/team">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                        </svg>
                        <span style={{ display: dNone }}>Team</span>
                    </Link></li>
                    <li><Link href='/dashboard/service'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                            <path fillRule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
                        </svg>
                        <span style={{ display: dNone }}>Services</span>
                    </Link></li>
                    <li><Link href='/dashboard/review'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                        <span style={{ display: dNone }}>Reviews</span>
                    </Link></li>
                    <li><Link href='/dashboard/faq'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <span style={{ display: dNone }}>FAQ</span>
                    </Link></li>
                </ul>
                <div className={`top-header dash-w-${topMenu}`}>
                    <div className="w-100 relative top-menu">
                        <button onClick={sideMenuChange} className='menu-bar'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul className='nav'>
                            <li><Link href='/dashboard'>Home</Link></li>
                            <li className='relative'>
                                <p onClick={MessageView} className='msg'>
                                    <span>1</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" /></svg>
                                </p>
                                <ul className="messages" style={{ right: rightMsg, top: topMsg, transform: `scale(${sclMsg})` }}>
                                    <li>
                                        <div className="profile-img">
                                            <Image src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" width={50} height={50} alt="web developer" />
                                        </div>
                                        <div className="chat-prev">
                                            <h5>John</h5>
                                            <p>Hi</p>
                                            <p className='time'>4 Hours Ago</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;