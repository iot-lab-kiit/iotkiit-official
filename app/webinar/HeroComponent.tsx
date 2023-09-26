import React from "react";

const HeroComponent: React.FC = () => {
  return (
    <div>
      <section className="pb-20 relative block bg-blueGray-800">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl pt-5 font-semibold text-gray-800">
                Let's Build something!!
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                We at IOT lab, will help us to learn skills that are very
                relevant to modern day industrial requirements. We specialize in
                varied domains like Web Development, App Development, Cyber
                Security, IoT, Machine Learning and the list goes on, we believe
                in holding hands and taking the step towards betterment
                together.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src="/images/online-learning.svg" alt="Learning" />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-gray-800">
                Learn
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                We will try to provide an extensive learning environment via our
                webinars.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src="/images/skill.svg" alt="Skills" />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-gray-800">
                Grow your skills
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                We will help you get familiar with newer skills and make you a
                relevant candidate.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src="/images/implement.svg" alt="Implement" />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-gray-800">
                Implement!
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                We will help you with real-time implementations of the
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;
