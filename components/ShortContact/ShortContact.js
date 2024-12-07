/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
"use client";
import React, { useRef } from 'react';
import './style.ShortContact.css';
import emailjs from '@emailjs/browser';

import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Accordion from '@/shared/Accordion/Accordion';

const ShortContact = () => {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ercrhi9', 'template_spwoe1q', form.current, 'a6ecxL5fR_O0YoSY4')
      .then((result) => {
        console.log(result.text);
        toast.success("We Will Reply As Soon As Possible");
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  const { data: accordionData = [], refetch } = useQuery({
    queryKey: ["accordionData"],
    queryFn: async () => {
      const res = await fetch("https://devzoneit-xi.vercel.app/faq");
      const data = await res.json();
      return data
    }
  });

  return (
    <div className='short-contact-section'>
      <div className="container">
        <div className="flex justify-between h-100">
          <div className="w-50 contact-info h-100">
            <div className="contact-heading">
              <span>Contact</span>
              <h2 className='text-center text-white-secondary font-primary f-black'>Contact</h2>
            </div>
            <p className='font-secondary'>We're happy to answer any questions you may have and help your determine which of our services best fit your needs</p>
            <div className="number">
              <h5 className='font-secondary'><span className='text-primary'>Call Us :</span> +880 1796 491068</h5>
            </div>
            <div className="steps">
              <h5 className="text-white font-secondary">
                FAQ
              </h5>
              <Accordion items={accordionData}></Accordion>
            </div>
          </div>
          <div className="w-50 message">
            <div className="w-100 contact-form">
              <div className="contact-form-title">
                <h5 className='text-white f-bold font-primary text-center'>Make a Free Consulting</h5>
              </div>
              <form ref={form} onSubmit={sendMessage}>
                <div className='w-50'>
                  <label htmlFor="fName" className='text-white font-secondary'>First Name</label>
                  <input type="text" id='fName' name='from_fName' />
                </div>
                <div className='w-50'>
                  <label htmlFor="lName" className='text-white font-secondary'>Last Name</label>
                  <input type="text" id='lName' name='from_lName' />
                </div>
                <div className="w-100">
                  <label htmlFor="sub" className='text-white font-secondary'>Subject</label>
                  <input type="text" id='sub' name='from_subject' />
                </div>
                <div className="w-100">
                  <label htmlFor="email" className='text-white font-secondary'>Email</label>
                  <input type="email" id='email' name='from_email' required />
                </div>
                <div className="w-100">
                  <label htmlFor="phone" className='text-white font-secondary'>Phone</label>
                  <input type="number" id='phone' name='from_phone' />
                </div>
                <div className="w-100">
                  <label htmlFor="message" className='text-white font-secondary' required>Message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <div className="w-100 footer-form">
                  <button type='submit' className='btn-primary w-50'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortContact;