const MapFooter = () => {
 return (
 <section className='text-brand-blue/80 body-font relative'>
 <div className='absolute inset-0 '>
 <iframe
 width='100%'
 height='100%'
 title='map'
 // className='grayscale contrast-125 opacity-50'
 src='https://maps.google.com/maps?q=20.3644763,85.8169693&z=16&output=embed'
 />
 </div>
 <div className=' container px-5 py-24 mx-auto flex'>
 <div className='lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative sm:z-10 -z-1'>
 <h2 className='text-gray-900 text-lg mb-2 font-medium uppercase title-font'>
 Locate Us
 </h2>
 <p className='leading-relaxed mb-3 text-brand-blue/80'>
 IoT Lab, Campus 25, A-004
 <br />
 School of Computer Science and Engineering (New Block)
 <br />
 Kalinga Institute of Industrial Technology
 <br />
 Patia, Bhubaneswar,
 <br />
 Odisha, India 751024
 </p>
 <a
 href='https://maps.app.goo.gl/wuBhh7PJVyAbosY28'
 target='_blank'
 rel='noopener noreferrer'
 className='mt-1 text-sm font-medium text-primary-default hover:underline'
 >
 📍 Open in Google Maps
 </a>
 </div>
 </div>
 </section>
 );
};

export default MapFooter;
