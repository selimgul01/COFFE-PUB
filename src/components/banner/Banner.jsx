import React from "react";

const Banner = () => {
  return (
    <div className='bg-[url("/h1.jpg")] bg-center bg-no-repeat bg-cover h-full w-full'>
      <div className="min-h-[550px] flex items-center justify-center ">
        <div className="container m-auto flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center">
            <div
              data-aos="zoom-in"
              className="md:min-h-[450px] min-h-[250px] flex justify-center relative"
            >
              <img
                className="spinOne m-auto md:h-[400px] md:w-[400px]  sm:h-[200px] sm:w-[200px]"
                src="/2.png"
                
              />
            </div>
            <div className="flex flex-col w-full h-full space-y-4 ">
              <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {" "}
                Premium Coffe
              </h1>
              <span className="text-gray-500 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                similique officia, quaerat explicabo ea quae eum. Quisquam
                nobis, quod facere minima veritatis aut quaerat velit sed,
                praesentium libero iusto nam!
              </span>
              <div className="grid grid-cols-2">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-red-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-width="2"
                        d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
                      ></path>
                    </svg>
                    <span>Premium Coffe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-green-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M368 128h.09m111.46-32h-91.06l8.92-35.66 38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 0 0-20.54-10.73l-47 16a16 16 0 0 0-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 128h2.75l1 8.66A8.3 8.3 0 0 0 236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 0 1 371 218.07a123.4 123.4 0 0 1 10.12 29.51 7.83 7.83 0 0 0 3.29 4.88 72 72 0 0 1 26.38 86.43 7.92 7.92 0 0 0-.15 5.53A96 96 0 0 1 416 376c0 22.34-7.6 43.63-21.4 59.95a80.12 80.12 0 0 1-28.78 21.67 8 8 0 0 0-4.21 4.37 108.19 108.19 0 0 1-17.37 29.86 2.5 2.5 0 0 0 1.9 4.11h49.21a48.22 48.22 0 0 0 47.85-44.14L477.4 128h2.6a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23z"></path>
                      <path d="M108.69 320a23.87 23.87 0 0 1 17 7l15.51 15.51a4 4 0 0 0 5.66 0L162.34 327a23.87 23.87 0 0 1 17-7h196.58a8 8 0 0 0 8.08-7.92V312a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312a8 8 0 0 0 8 8zm77.25 32a8 8 0 0 0-5.66 2.34l-22.14 22.15a20 20 0 0 1-28.28 0l-22.14-22.15a8 8 0 0 0-5.66-2.34h-69.4a15.93 15.93 0 0 0-15.76 13.17A65.22 65.22 0 0 0 16 376c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 0 0-.9-10.83A15.93 15.93 0 0 0 367.34 352z"></path>
                    </svg>
                    <span>Hot Coffe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-blue-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M267.2 25.08l-70 70.16c-7.7 7.66-7.3 16.86-2.4 26.96l2 4.3-3.1 2.9-23.6 22.3 21.7 21.6 22.2-23.7 2.9-3 4.2 1.9c10.7 5.3 20.6 5.7 27.7-1.4L319 76.85l-10.2-10.18-45.7 45.63-9.6-9.8L299 56.97l-10.9-11.03-45.5 45.7-9.7-9.7 45.5-45.69zM28.97 27.84c-5.73 9.12-6.61 20.83-3.32 34.58 3.87 16.32 13.68 35.22 27.41 53.08 27.35 35.8 50.04 48.1 86.84 54.8l2.4.4c13.6 16.1 27.2 32.1 40.8 48.2h37.1zM137 183.2l-37.74 35.7h49.64l9.7-10.3zM26.25 232.9v63.5l16.51-49.5H279.8l16.5 49.5v-63.5zm29.49 32l-10 30h45.04l10.02-30zm63.96 0l-10 30h42.6v-30zm50.6 0v30h42.6l-10-30zm51.4 0l10 30h45.1l-10-30zm92.6 1.8v188.2h79c4.2-18.2 20.6-32 40-32s35.8 13.8 40 32h15v-64l-56.2-14H328.3v-82H390l-6.9-15zM26.25 312.9v114.2l42.17 27.8h14.85c4.14-18.2 20.53-32 40.03-32 19.4 0 35.8 13.8 40 32h133v-142h-14v80H40.25v-80zm320.05 0v46h72.4l-23-46zm-281.05 19l16 16h16l16.05-16zm-8 27v18H265.3v-18zm66.05 82c-12.9 0-23.1 10.2-23.1 23s10.2 23 23.1 23c12.8 0 23-10.2 23-23s-10.2-23-23-23zm310 0c-12.8 0-23 10.2-23 23s10.2 23 23 23 23-10.2 23-23-10.2-23-23-23z"></path>
                    </svg>
                    <span>Cold Coffe</span>
                  </div>
                </div>
                <div className="flex ">
                  <div className=" h-full w-5 max-w-xl bg-gradient-to-r opacity-50 from-primary to-secondary"></div>
                  <div className="flex flex-col space-y-3 ml-5">
                    <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      Tea Lover
                    </h1>
                    <span className="text-gray-500 font-semibold text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium architecto amet eveniet qui obcaecati
                      distinctio explicabo laudantium assumenda sequi unde quas,
                      provident nemo quod! Debitis dolores ex dolor provident
                      obcaecati?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
