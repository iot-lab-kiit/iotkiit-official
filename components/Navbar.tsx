'use client';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={() => setOpen(!open)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex md:grid md:grid-cols-2  items-center  grid-cols-2 justify-center md:justify-items-stretch sm:items-center'>
            <div className='flex-shrink-0 flex items-center sm:self-start '>
              <Link href='/' title='homepage-link' rel='noopener noreferrer'>
                <Image
                  className='h-10 w-auto'
                  src='/images/logo_small.webp'
                  alt='Workflow'
                  width={400}
                  height={410}
                />
              </Link>
              {/* <a href="/" title="homepage-link" rel="noopener noreferrer">
                <img
                  className="hidden lg:block h-10 w-auto"
                  src="/images/logo_small.webp"
                  alt="Workflow"
                />
              </a> */}
            </div>
            <div className=' hidden sm:ml-6 md:justify-self-end sm:block'>
              <div className='flex space-x-4'>
                <Link
                  title='homepage-link'
                  rel='noopener noreferrer'
                  href='/'
                  className={`${
                    path == '/'
                      ? 'bg-gray-900 text-white '
                      : 'hover:bg-gray-700 hover:text-white'
                  } text-gray-300  px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  href='/team'
                  className={`${
                    path == '/team'
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-700 hover:text-white'
                  } text-gray-300  px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Team
                </Link>
                {/* <a
                  href="/cp-probs"
                  className={`${
                    path == "/cp-probs" ? "bg-gray-900 text-white" : ""
                  } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  CP Questions
                </a> */}
                <Link
                  href='/work'
                  className={`${
                    path == '/work'
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-700 hover:text-white '
                  } text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Work
                </Link>
                {/* <a
                  href="/events"
                  className={`${path == "/events" ? "bg-gray-900 text-white" : ""
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Events
                </a> */}
                {/* <a
                  href="/attendance"
                  className={`${path == "/attendance" ? "bg-gray-900 text-white" : ""
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Attendance
                </a> */}
                <Link
                  href='/contact'
                  className={`${
                    path == '/contact'
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-700 hover:text-white'
                  } text-gray-300  px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Contact
                </Link>
                {/* <a
                  href="/webinar"
                  className={`${
                    path == "/webinar" ? "bg-gray-900 text-white" : ""
                  } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Webinar
                </a> */}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
        </div>
      </div>
      <Transition
        show={open}
        enter='transition-all ease-in-out duration-300'
        enterFrom='h-0 '
        enterTo='h-52 opacity-100'
        leave='transition-all ease-in-out duration-300'
        leaveFrom='h-52 opacity-100'
        leaveTo='h-0 opacity-0'
      >
        <div className=' sm:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              href='/'
              className={`${
                path == '/'
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-700 hover:text-white'
              } text-gray-300 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href='/team'
              className={`${
                path == '/team'
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-700 hover:text-white'
              } text-gray-300 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Team
            </Link>
            <Link
              href='/work'
              className={`${
                path == '/work'
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-700 hover:text-white'
              } text-gray-300  block px-3 py-2 rounded-md text-base font-medium`}
            >
              Work
            </Link>
            {/*<a*/}
            {/*  href="/events"*/}
            {/*  className={`${path == "/events" ? "bg-gray-900 text-white" : ""*/}
            {/*    } text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium`}*/}
            {/*>*/}
            {/*  Events*/}
            {/*</a>*/}
            <Link
              href='/contact'
              className={`${
                path == '/contact'
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-700 hover:text-white'
              } text-gray-300  block px-3 py-2 rounded-md text-base font-medium`}
            >
              Contact
            </Link>
            {/*<a*/}
            {/*  href="/webinar"*/}
            {/*  className={`${path == "/webinar" ? "bg-gray-900 text-white" : ""*/}
            {/*    } text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium`}*/}
            {/*>*/}
            {/*  Webinar*/}
            {/*</a>*/}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
