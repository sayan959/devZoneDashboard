/* eslint-disable no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import './style.projects.css';
import aboutbnr1 from '@/public/abouthead.png';
import aboutbnr2 from '@/public/abouthead1.png';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'DevZone IT | Projects';
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'Optimizing IT Operations',
      category: 'web-development',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-3/home3-suc-sto-01.png',
    },
    {
      id: 2,
      title: 'Maximizing Efficiency With DevOps',
      category: 'web-design',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/work-05.png',
    },
    {
      id: 3,
      title: 'Making Figma Design With Modern UI',
      category: 'ux/ui',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/work-03.png',
    },
    {
      id: 4,
      title: 'Making PSD Design With Modern UI',
      category: 'ux/ui',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/work-07.png',
    },
    {
      id: 5,
      title: 'Make Dynamic Web Application With Modern Technology',
      category: 'web-development',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/work-02.png',
    },
    {
      id: 6,
      title: 'Making Animation Video',
      category: 'graphic',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/work-03.png',
    },
    {
      id: 7,
      title: 'Making XD Design With Modern UI',
      category: 'ux/ui',
      img: 'https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/work-07.png',
    },
  ];

  const [categoryData, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredProjects =
    categoryData === 'all'
      ? projectsData
      : projectsData.filter((item) => item.category === categoryData);

  const currentItems = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 200);
  };

  return (
    <div className="projects">
      <div className="projects-head relative">
        <div className="container">
          <p className="font-secondary">Projects</p>
          <h3 className="text-white-secondary f-bold font-secondary text-center">
            Our Completed Projects
          </h3>
        </div>
        <Image
          height={210}
          width={164}
          className="abouth1"
          src={aboutbnr1}
          alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service"
        />
        <Image
          height={250}
          width={191}
          className="abouth2"
          src={aboutbnr2}
          alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service"
        />
      </div>
      <div className="project-data">
        <div className="container">
          <div className="tabs">
            <button
              onClick={() => {
                setCategory('all');
                setCurrentPage(1);
              }}
              className={
                categoryData == 'all' ? 'active btn-primary' : 'btn-secondary'
              }
            >
              All
            </button>
            <button
              onClick={() => {
                setCategory('ux/ui');
                setCurrentPage(1);
              }}
              className={
                categoryData == 'ux/ui' ? 'active btn-primary' : 'btn-secondary'
              }
            >
              React JS
            </button>
            <button
              onClick={() => {
                setCategory('web-design');
                setCurrentPage(1);
              }}
              className={
                categoryData == 'web-design'
                  ? 'active btn-primary'
                  : 'btn-secondary'
              }
            >
              Next JS
            </button>
            <button
              onClick={() => {
                setCategory('web-development');
                setCurrentPage(1);
              }}
              className={
                categoryData == 'web-development'
                  ? 'active btn-primary'
                  : 'btn-secondary'
              }
            >
              WordPress
            </button>
            <button
              onClick={() => {
                setCategory('graphic');
                setCurrentPage(1);
              }}
              className={
                categoryData == 'graphic'
                  ? 'active btn-primary'
                  : 'btn-secondary'
              }
            >
              Shopify
            </button>
          </div>

          <div className="projects-content">
            {currentItems.map((item, i) => (
              <Link
                href={`/project/${item.id}`}
                className="projects-card"
                key={i}
              >
                <Image height={417} width={400} src={item.img} alt="web developer" />
                <div className="project-card-content">
                  <div className="w-100 h-100 relative">
                    <p>{item.category}</p>
                    <h4>{item.title}</h4>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredProjects.length > itemsPerPage && (
            <div className="pagination">
              {Array.from({
                length: Math.ceil(filteredProjects.length / itemsPerPage),
              }).map((_, index) => (
                <button
                  className={currentPage === index + 1 ? 'active' : ''}
                  key={index}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
