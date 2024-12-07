import React from 'react';
import './style.Reviews.css';
import fiverr from '@/public/fiverr.png';
import upwork from '@/public/up.png';
import CountUpOnScroll from '/components/CountUpOnScroll/CountUpOnScroll';
import Image from 'next/image';

const Reviews = () => {
  return (
    <div className='home-reviews'>
      <div className="review-section-home">
        <div className="reviews">
          <div className="reviewOn">
            <h5 className='text-white font-primary'>Review On</h5>
            <div className="flex gap-10">
              <div className="reviewIconBox">
                <Image src={fiverr} width={90} height={25} alt="fiverr" />
                <div className="flex item-center gap-5">
                  <div className="rating">
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                  </div>
                  <h6 className='text-white font-secondary'>| 5.0</h6>
                </div>
              </div>
              <div className="reviewIconBox">
                <Image src={upwork} width={90} height={25} alt="upwork" />
                <div className="flex item-center gap-5">
                  <div className="rating">
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                    <input type="radio" name="rating-1" disabled={true} />
                  </div>
                  <h6 className='text-white font-secondary'>| 5.0</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewCount">
            <div className="flex item-center rev-parent">
              <div className="rev-count">
                <div><div className="flex">
                  <span className='f-bold'><CountUpOnScroll number={4}></CountUpOnScroll></span>
                  <span className='sub'>Years</span>
                </div>
                  <p>Working With Passion</p></div>
              </div>
              <div className="rev-count">
                <div>
                  <div className="flex">
                    <span className='f-bold'><CountUpOnScroll number={1200}></CountUpOnScroll></span>
                    <span className='sub'>Customers</span>
                  </div>
                  <p>Satisfied Customer</p>
                </div>
              </div>
              <div className="rev-count">
                <div>
                  <div className="flex">
                    <span className='f-bold'><CountUpOnScroll number={520}></CountUpOnScroll></span>
                    <span className='sub'>Projects</span>
                  </div>
                  <p>We Have Completed</p>
                </div>
              </div>
              <div className="rev-count border-right-0">
                <div>
                  <div className="flex">
                    <span className='f-bold'><CountUpOnScroll number={5}></CountUpOnScroll></span>
                    <span className='sub'>Awards</span>
                  </div>
                  <p>Achievement For Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;