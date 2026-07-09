const EventHeader = () => {
  return (
    <div>
      <div className="bg-primary-600 md:overflow-hidden py-0">
        <div className="px-4 py-12 md:pt-0">
          <div className="md:max-w-6xl md:mx-auto">
            <div className="md:flex md:flex-wrap">
              <div className="md:w-1/2 text-center md:text-left md:pt-16 md:pl-10 lg:pl-0">
                <h1
                  className="font-bold text-white text-6xl md:text-7xl leading-tight mb-4"
                  style={{ textShadow: "1px 0px #000000" }}
                >
                  Events <br />
                  <div className="pt-2 sm:text-4xl text-3xl">
                    &amp; Workshops
                  </div>
                </h1>
                <div className="xl:w-full lg:w-3/4 mt-4  w-full mx-auto md:text-left  text-center inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-white mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-white text-xl tracking-wide">
                    Tell me and I forget, teach me and I may remember, involve
                    me and I learn.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-900 mt-2 mb-2"></span>
                  <h2 className="text-white font-medium title-font tracking-wider text-xl">
                    Benjamin Franklin
                  </h2>
                  <br />
                </div>
              </div>
              <div className="md:w-1/2 relative pt-2">
                <div className="hidden md:block">
                  <div
                    className="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style={{ transform: "rotate(-8deg)" }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                      <div className="mb-1">
                        <span
                          className="w-1 h-1 bg-indigo-100 rounded-full inline-block"
                          style={{ marginRight: 1 }}
                        />
                        <span
                          className="w-1 h-1 bg-indigo-100 rounded-full inline-block"
                          style={{ marginRight: 1 }}
                        />
                        <span className="w-1 h-1 bg-indigo-100 rounded-full inline-block" />
                      </div>
                      <div className="h-1 w-12 bg-indigo-100 rounded mb-1" />
                      <div className="h-1 w-10 bg-indigo-100 rounded mb-2" />
                      <div className="flex">
                        <div className="w-6 h-3 rounded bg-indigo-100 mr-1" />
                        <div className="w-6 h-3 rounded bg-indigo-100" />
                      </div>
                      <div className="-mr-2 -mb-4 absolute bottom-0 right-0 h-16 w-10 rounded-lg bg-green-700 border-2 border-white" />
                      <div className="w-2 h-2 rounded-full bg-green-800 mx-auto absolute bottom-0 right-0 mr-2 -mb-2 z-10 border-2 border-white" />
                    </div>
                    <div className="text-gray-800 text-center">
                      Modern <br />
                      Frameworks
                    </div>
                  </div>
                  <div
                    className="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style={{ transform: "rotate(-8deg)", zIndex: 2 }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg relative mb-8 py-2 w-20 border-2 border-white">
                      <div
                        className="h-8 bg-green-700 w-8 rounded absolute left-0 top-0 -mt-3 ml-4"
                        style={{ transform: "rotate(-45deg)", zIndex: -1 }}
                      />
                      <div
                        className="h-8 bg-green-800 w-8 rounded absolute left-0 top-0 -mt-3 ml-8"
                        style={{ transform: "rotate(-12deg)", zIndex: -2 }}
                      />
                      <div className="flex items-center justify-center h-6 bg-indigo-800 w-6 rounded-l-lg ml-auto border-4 border-white -mr-1">
                        <div className="h-2 w-2 rounded-full bg-indigo-800 border-2 border-white" />
                      </div>
                      <div className="w-8 h-8 bg-green-700 border-4 border-white rounded-full -ml-3 -mb-5" />
                    </div>
                    <div className="text-gray-800 text-center">
                      Minimal Costs
                    </div>
                  </div>
                  <div
                    className="ml-32 absolute left-0 bottom-5 w-48 bg-white rounded-lg shadow-lg px-10 py-8 "
                    style={{
                      transform: "rotate(-8deg)",
                      zIndex: 2,
                      marginBottom: "-220px",
                    }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg pt-4 mb-12 relative">
                      <div className="h-4 bg-white" />
                      <div className="text-right my-2 pb-1">
                        <div className="inline-flex w-3 h-3 rounded-full bg-white -mr-2" />
                        <div className="inline-flex w-3 h-3 rounded-full bg-indigo-800 border-2 border-white mr-2" />
                      </div>
                      <div className="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-green-700 mx-auto rounded-lg pb-2 pt-3">
                        <div className="h-2 bg-white mb-2" />
                        <div className="h-2 bg-white w-6 ml-auto rounded mr-2" />
                      </div>
                    </div>
                    <div className="text-gray-800 text-center">
                      Industry Integrations
                    </div>
                  </div>
                  <div
                    className="mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg"
                    style={{
                      transform: "rotate(-8deg)",
                      marginRight: "-250px",
                      zIndex: 1,
                    }}
                  >
                    <div className="w-32 bg-gray-200" style={{ height: 560 }} />
                    <div className="flex-1 p-6">
                      <h2 className="text-lg text-gray-700 font-bold mb-3">
                        Popular Courses
                      </h2>
                      <div className="flex mb-5">
                        <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                          <div className="p-1 rounded-full bg-gray-300" />
                        </div>
                        <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                          <div className="p-1 rounded-full bg-gray-300" />
                        </div>
                        <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                          <div className="p-1 rounded-full bg-gray-300" />
                        </div>
                        <div className="w-16 rounded-full bg-gray-100 py-2 px-4">
                          <div className="p-1 rounded-full bg-gray-300" />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-4 mb-5">
                        <div className="w-1/3 px-4">
                          <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mb-6" />
                            <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full" />
                            <div className="h-2 w-10 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        <div className="w-1/3 px-4">
                          <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mb-6" />
                            <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full" />
                            <div className="h-2 w-10 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        <div className="w-1/3 px-4">
                          <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mb-6" />
                            <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full" />
                            <div className="h-2 w-10 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                      </div>
                      <h2 className="text-lg text-gray-700 font-bold mb-3">
                        Hands-On Workshops
                      </h2>
                      <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-8 w-8 rounded bg-gray-200 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-green-200" />
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto" />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-8 w-8 rounded bg-gray-200 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-orange-200" />
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto" />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-8 w-8 rounded bg-gray-200 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-blue-200" />
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-8 bg-gray-100 rounded-full mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full absolute left-0 bottom-0 ml-1"
                    style={{
                      transform: "rotate(-8deg)",
                      zIndex: 1,
                      marginBottom: "-360px",
                    }}
                  >
                    <div className="grid--gray h-48 w-48" />
                  </div>
                </div>
                <div className="md:hidden w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow">
                  <div className="h-4 bg-gray-200 absolute top-0 left-0 right-0 rounded-t-lg flex items-center">
                    <span className="h-2 w-2 rounded-full bg-red-500 inline-block mr-1 ml-2" />
                    <span className="h-2 w-2 rounded-full bg-orange-400 inline-block mr-1" />
                    <span className="h-2 w-2 rounded-full bg-green-500 inline-block mr-1" />
                  </div>
                  <div
                    className="w-32 bg-gray-100 px-2 py-8"
                    style={{ height: 340 }}
                  >
                    <div className="h-2 w-16 bg-gray-300 rounded-full mb-4" />
                    <div className="flex items-center mb-4">
                      <div className="h-5 w-5 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
                      <div>
                        <div className="h-2 w-10 bg-gray-300 rounded-full" />
                      </div>
                    </div>
                    <div className="h-2 w-16 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-10 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-20 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-6 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-16 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-10 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-20 bg-gray-200 rounded-full mb-2" />
                    <div className="h-2 w-6 bg-gray-200 rounded-full mb-2" />
                  </div>
                  <div className="flex-1 px-4 py-8">
                    <h2 className="text-xs text-gray-700 font-bold mb-1">
                      Popular Courses
                    </h2>
                    <div className="flex mb-5">
                      <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                      <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                      <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                      <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-5">
                      <div className="w-1/3 px-2">
                        <div className="p-3 rounded-lg bg-white shadow">
                          <div className="w-6 h-6 rounded-full bg-gray-200 mb-2" />
                          <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                          <div className="h-2 w-6 bg-gray-200 rounded-full" />
                        </div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="p-3 rounded-lg bg-white shadow">
                          <div className="w-6 h-6 rounded-full bg-gray-200 mb-2" />
                          <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                          <div className="h-2 w-6 bg-gray-200 rounded-full" />
                        </div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="p-3 rounded-lg bg-white shadow">
                          <div className="w-6 h-6 rounded-full bg-gray-200 mb-2" />
                          <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                          <div className="h-2 w-6 bg-gray-200 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <h2 className="text-xs text-gray-700 font-bold mb-1">
                      Hands-On Workshops
                    </h2>
                    <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                      <div className="w-1/3">
                        <div className="flex">
                          <div className="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0" />
                          <div>
                            <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                            <div className="h-2 w-10 bg-gray-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                          <div className="p-1 rounded-full bg-green-200" />
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center py-3">
                      <div className="w-1/3">
                        <div className="flex">
                          <div className="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0" />
                          <div>
                            <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                            <div className="h-2 w-10 bg-gray-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                          <div className="p-1 rounded-full bg-orange-200" />
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mr-3 md:hidden absolute right-0 bottom-2 pb-3 w-40 bg-white rounded-lg shadow-lg px-10 py-6"
                  style={{ zIndex: 2, marginBottom: "-380px" }}
                >
                  <div className="bg-indigo-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                    <div className="mb-1">
                      <span
                        className="w-1 h-1 bg-indigo-100 rounded-full inline-block"
                        style={{ marginRight: 1 }}
                      />
                      <span
                        className="w-1 h-1 bg-indigo-100 rounded-full inline-block"
                        style={{ marginRight: 1 }}
                      />
                      <span className="w-1 h-1 bg-indigo-100 rounded-full inline-block" />
                    </div>
                    <div className="h-1 w-12 bg-indigo-100 rounded mb-1" />
                    <div className="h-1 w-10 bg-indigo-100 rounded mb-2" />
                    <div className="flex">
                      <div className="w-6 h-3 rounded bg-indigo-100 mr-1" />
                      <div className="w-6 h-3 rounded bg-indigo-100" />
                    </div>
                    <div className="-mr-2 -mb-4 absolute bottom-0 right-0 h-16 w-10 rounded-lg bg-green-700 border-2 border-white" />
                    <div className="w-2 h-2 rounded-full bg-green-800 mx-auto absolute bottom-0 right-0 mr-2 -mb-2 z-10 border-2 border-white" />
                  </div>
                  <div className="text-gray-800 text-center text-sm">
                    Modern
                    <br />
                    Frameworks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="fill-current text-white hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
        >
          <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
};

export default EventHeader;
