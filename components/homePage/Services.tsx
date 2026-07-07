import AppDevAnimation from '../animations/AppDevAnimation';
import WebDevAnimation from '../animations/WebDevAnimation';
import EventManagementAnimation from '../animations/EventManagementAnimation';
import React from 'react';
const Services: React.FC = () => {
  return (
    <div id='services' className='relative lg:px-32 md:px-32 px-4 pb-14 '>
      <img
        src='/images/circle.svg'
        alt='side_image'
        className='absolute top-0 right-0 mt-64 hidden md:block'
      />
      <div className='container mx-auto px-6 pt-32 sm:pt-24 relative'>
        <h3 className='flex flex-col items-center text-4xl pb-8 text-secondary font-bold'>
          Services we offer{' '}
          <span className='bg-primary-default h-1 w-20 block mt-4' />
        </h3>
        <div className='flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 lg:mt-0'>
          <div className='md:w-1/3'>
            <AppDevAnimation />
          </div>
          <div className='md:ml-16 xl:ml-32 '>
            <h4 className='text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2'>
              App Development
            </h4>
            <p className='text-secondary-700 text-lg mb-4'>
              We build apps by first understanding the problem properly. That
              helps us keep the work simple, useful, and easier to trust.
            </p>
            <p className='text-secondary-700 text-lg'>
              The goal is practical tech that solves something real and gives
              people a smoother experience.
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8'>
          <div className='md:mr-16 xl:mr-32'>
            <h4 className='text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2'>
              Web Solutions
            </h4>
            <p className='text-secondary-700 text-lg mb-4'>
              We make websites that are clear, fast, and easy to use, whether
              they are for a portfolio, a lab, or a business.
            </p>
            <p className='text-secondary-700 text-lg'>
              We also handle the practical side of the web, from hosting to
              storage to the small details that keep things running smoothly.
            </p>
          </div>
          <div className='md:w-1/3'>
            <WebDevAnimation />
          </div>
        </div>
        <div className='relative mt-16 flex flex-col md:mt-12 md:flex-row items-center'>
          <div className='md:w-1/3'>
            <EventManagementAnimation />
          </div>
          <div className='md:ml-16 xl:ml-32'>
            <h4 className='text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2'>
              Event Management
            </h4>
            <p className='text-secondary-700 text-lg mb-4'>
              We help plan and run events with a steady hand, so the people in
              front can focus on the actual event.
            </p>
            <p className='text-secondary-700 text-lg'>
              From the first planning call to the wrap-up after the event, we
              stay involved and keep things moving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
