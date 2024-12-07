"use client";
import React, { useEffect, useState } from 'react';
import "./style.ReviewSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from 'next/image';
import ContentLoader from '@/shared/Loader/ContentLoader/ContentLoader';
import { useQuery } from "@tanstack/react-query";

import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

const ReviewSlide = () => {

  const { data: reviewData = [] } = useQuery({
    queryKey: ["reviewData"],
    queryFn: async () => {
      const res = await fetch("https://devzoneit-xi.vercel.app/reviews");
      const data = await res.json();
      return data;
    },
  });

  const [textOpen, setTextOpen] = useState(false);

  const PrevButton = () => {
    const button = document.querySelector(".ReviewSlide .swiper-button-prev");
    button.click();
  };
  const NextButton = () => {
    const button = document.querySelector(".ReviewSlide .swiper-button-next");
    button.click();
  };

  useEffect(() => {

    if (typeof window !== 'undefined') {
      window.addEventListener("load", () => {
        document.querySelector(".swiper-slide").style.transform =
          "translate3d(0px, 0px, -10px)";
      });
    }
  }, []);

  return (
    <div className="homeReviewSlide">
      <div className="container">
        <div className="approachHead">
          <div className="approachHeadTitle">
            <h2>Satisfied Clients</h2>
            <p>
              Services are professional offerings provided by businesses to meet
              specific needs or solve problems for their customers. Services
              might begin at a cost that you can afford.
            </p>
          </div>
          <div className="AppSliderButtons">
            <button onClick={PrevButton} className="prev-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={NextButton} className="next-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
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
        <div className="reviewSlider">
          <div className="slider-shadow-control1"></div>
          <div className="slider-shadow-control2"></div>
          {!reviewData.length ? (
            <ContentLoader></ContentLoader>
          ) : (
            <Swiper
              effect={"coverflow"}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              speed={800}
              loop={true}
              freeMode={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 600,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Autoplay, Navigation]}
              className="reviewSlide"
              rewind={true}
              navigation={true}
            >
              {reviewData.map((slide, i) => (

                <SwiperSlide key={i}>
                  <div className="rev-slide">
                    <div className="rev-slide-content">
                      <div className="rev-slide-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="102"
                          height="103"
                          viewBox="0 0 102 103"
                          fill="none"
                        >
                          <g opacity="0.01" clipPath="url(#clip0_1521_236)">
                            <path
                              d="M68.2323 96.7436C69.6667 96.4016 76.1413 93.0018 78.8905 91.151C82.4565 88.757 84.4687 87.1275 87.4769 84.0898C97.2187 74.3129 100.904 64.033 101.801 44.1572C101.94 41.3006 102 33.3141 101.96 24.543C101.9 10.8029 101.88 9.69648 101.542 9.03262C101.064 8.08711 100.127 7.12148 99.1311 6.57832L98.3143 6.13574L81.0819 6.13574C66.9972 6.13575 63.7101 6.1961 63.0726 6.41739C62.0964 6.75938 60.8612 7.88594 60.3034 8.93204L59.8651 9.75684L59.8054 26.9369C59.7456 45.827 59.7257 45.4045 60.9608 46.9133C61.2796 47.3156 62.0167 47.8789 62.5944 48.1606L63.6304 48.6836L71.8581 48.6836L80.0858 48.6836L80.0858 50.1522C80.0858 53.3709 79.3089 57.8973 78.1933 61.277C75.6632 68.9215 71.2605 73.7496 62.953 77.9541C61.3394 78.7789 59.7655 79.7043 59.4069 80.0865C58.4905 81.032 58.112 82.1988 58.2116 83.7277C58.2913 84.8543 58.5702 85.5785 60.662 89.9842C63.1124 95.1543 63.5706 95.8584 65.0249 96.4619C65.9214 96.8441 67.3159 96.9648 68.2323 96.7436Z"
                              fill="white"
                            />
                            <path
                              d="M11.5547 96.0998C24.9621 90.1854 35.182 80.1268 39.7043 68.3984C40.9992 65.059 42.1547 59.9693 42.8121 54.7188C43.6488 48.1404 43.7285 45.666 43.7285 27.3594C43.7285 10.4811 43.7086 9.7166 43.35 8.99238C42.8719 8.00664 42.0152 7.1416 40.9594 6.57832L40.1426 6.13574L22.8105 6.13574C5.61797 6.13575 5.47852 6.13575 4.58204 6.55821C3.50626 7.06114 2.70938 7.84571 2.11173 8.95215C1.69336 9.75684 1.69336 9.79707 1.6336 26.9369C1.57384 45.827 1.55391 45.4045 2.78907 46.9133C3.10782 47.3156 3.84493 47.8789 4.42266 48.1606L5.4586 48.6836L13.7859 48.6836C21.8941 48.6836 22.1133 48.6836 22.1133 49.0658C22.1133 50.5746 21.5953 55.0205 21.1969 57.0322C20.5793 60.1303 19.9219 62.1219 18.627 64.8779C15.8777 70.7119 11.6942 74.6348 4.58204 78.0949C0.916419 79.8652 0.119544 80.8108 0.0996199 83.3858C0.0996201 84.7738 0.139465 84.8543 2.39064 89.5819C3.64571 92.1971 4.94064 94.6916 5.25939 95.094C6.67384 96.824 9.04454 97.2063 11.5547 96.0998Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1521_236">
                              <rect
                                width="102"
                                height="103"
                                fill="white"
                                transform="translate(102 103) rotate(180)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="rate">
                        <div className="rating">
                          {[...Array(Number(slide?.rate))].map((data, i) => (
                            <div className="star-box" key={i}>
                              <input type="radio" disabled />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="slider-content">
                        <p>{textOpen ? slide?.comment : slide?.comment.substring(0, 150)} {slide?.comment.length < 110 ? undefined : <span style={{
                          marginTop: "0",
                          marginBottom: "10px"
                        }} className="bg-white trans-0 read-more f-semibold" onClick={() => setTextOpen(!textOpen)}>
                          {textOpen ? "Read less..." : "Read more..."}
                        </span>}</p>

                        <div className="slider-bottom-content">
                          <div className="btm-left">
                            <h4>{slide?.fullName}</h4>
                            <p>{slide?.from}</p>
                          </div>
                          <div className="btm-right">
                            <p className="date">{slide.formattedDate}</p>
                            <p className="time">{slide.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-triangle"></div>
                    </div>
                    <div className="userImg">
                      <Image width={100} height={99.78} src={slide.photo} alt="web developers" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlide;