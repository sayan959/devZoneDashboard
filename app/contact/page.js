/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client';
import React, { useEffect, useRef } from 'react';
import './style.contact.css';
import emailjs from '@emailjs/browser';
import aboutbnr1 from '@/public/abouthead.png';
import aboutbnr2 from '@/public/abouthead1.png';
import toast from 'react-hot-toast';
// import ContentLoader from '/shared/Loader/ContentLoader/ContentLoader';
import Image from 'next/image';

const Contact = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.title = 'DevZone IT | Contact';
    }
  }, []);
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595.316329403484!2d90.38609643347905!3d23.86020227309777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4285cb21c29%3A0x2a5eb01cd0dd6af9!2s12%20Road-03%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1704969501482!5m2!1sen!2sbd';

  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ercrhi9',
        'template_spwoe1q',
        form.current,
        'a6ecxL5fR_O0YoSY4'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('We Will Reply As Soon As Possible');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-head relative">
        <div className="container">
          <p className="font-secondary">Contact</p>
          <h3 className="text-white-secondary f-bold font-secondary text-center">
            For Any Query
          </h3>
        </div>
        <Image
          height={210}
          width={164}
          className="abouth1"
          src={aboutbnr1}
          alt="web developers"
        />
        <Image
          height={250}
          width={191}
          className="abouth2"
          src={aboutbnr2}
          alt="web developers"
        />
      </div>
      <div className="short-contact-section">
        <div className="container">
          <div className="contact-page flex gap-10 justify-between h-100">
            <div className="w-50 contact-info h-100">
              <h5 className="text-primary">Contact With Us</h5>
              <h2 className="text-start">Let's Work Together</h2>
              <p className="font-secondary">
                We're happy to answer any questions you may have and help your
                determine which of our services best fit your needs
              </p>
              <div className="contact-details">
                <div className="contact-add gap-15 item-center">
                  <div className="add-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#06d889"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="font-secondary">
                    House-06, Road-01, Sector-04, Uttara, Dhaka-1230
                  </p>
                </div>
                <div className="contact-phone gap-15 item-center">
                  <div className="add-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#06d889"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                      />
                    </svg>
                  </div>
                  <div className="numbers">
                    <a href="tel:+8801796491068" className="font-secondary">
                      +880 1796 491068
                    </a>
                  </div>
                </div>
                <div className="contact-phone gap-15 item-center">
                  <div className="add-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#06d889"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>
                  <div className="numbers">
                    <a
                      href="mailto:support@devzoneit.com"
                      className="font-secondary"
                    >
                      support@devzoneit.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-social">
                <h5 className="font-secondary">Follow Us</h5>
                <div className="flex gap-20">
                  <div className="social-icon">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/devzoneit"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      href="https://www.linkedin.com/groups/14437457/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50 message">
              <div className="w-95 mx-auto contact-form">
                <div className="contact-form-title">
                  <h5 className="text-white f-bold font-primary text-center">
                    Make a Free Consulting
                  </h5>
                </div>
                <form ref={form} onSubmit={sendMessage}>
                  <div className="w-50">
                    <label
                      htmlFor="fName"
                      className="text-white font-secondary"
                    >
                      First Name
                    </label>
                    <input type="text" id="fName" name="from_fName" />
                  </div>
                  <div className="w-50">
                    <label
                      htmlFor="lName"
                      className="text-white font-secondary"
                    >
                      Last Name
                    </label>
                    <input type="text" id="lName" name="from_lName" />
                  </div>
                  <div className="w-100">
                    <label htmlFor="sub" className="text-white font-secondary">
                      Subject
                    </label>
                    <input type="text" id="sub" name="from_subject" />
                  </div>
                  <div className="w-100">
                    <label
                      htmlFor="email"
                      className="text-white font-secondary"
                    >
                      Email
                    </label>
                    <input type="email" id="email" name="from_email" required />
                  </div>
                  <div className="w-100">
                    <label
                      htmlFor="phone"
                      className="text-white font-secondary"
                    >
                      Phone
                    </label>
                    <input type="number" id="phone" name="from_phone" />
                  </div>
                  <div className="w-100">
                    <label
                      htmlFor="message"
                      className="text-white font-secondary"
                      required
                    >
                      Message
                    </label>
                    <textarea name="message" id="message"></textarea>
                  </div>
                  <div className="w-100 footer-form">
                    <button type="submit" className="btn-primary w-50">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100">
          <div className="map">
            {!map.length ? (
              <ContentLoader />
            ) : (
              <iframe
                title="Google Maps"
                src={map}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
