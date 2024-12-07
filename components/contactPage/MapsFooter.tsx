const MapFooter = () => {
  return (
    <section className='text-gray-700 body-font relative'>
      <div className='absolute inset-0 '>
        <iframe
          width='100%'
          height='100%'
          title='map'
          // className='grayscale contrast-125 opacity-50'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d935.2104779406211!2d85.8158259!3d20.3481485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f698e918e3440f1!2sSchool%20Of%20Computer%20Engineering%2C%20KIIT!5e0!3m2!1sen!2sin!4v1611431926272!5m2!1sen!2sin'
        />
      </div>
      <div className=' container px-5 py-24 mx-auto flex'>
        <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative sm:z-10 -z-1'>
          <h2 className='text-gray-900 text-lg mb-2 font-medium uppercase title-font'>
            Locate Us
          </h2>
          <p className='leading-relaxed mb-3 text-gray-600'>
            DL-7 (IoT Lab)
            <br />
            School Of Computer Engineering
            <br />
            Kalinga Institute of Industrial Technology
            <br />
            Patia, Bhubaneswar,
            <br />
            Odisha, India 751024
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default MapFooter;
