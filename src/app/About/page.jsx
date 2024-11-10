import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='font-sans'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Hero section heading */}
          <div className="flex flex-col w-full mb-20 text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Meet Our Experts
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our team is composed of industry-leading experts with diverse skills in web development, design, and research. We're committed to delivering innovative solutions that empower businesses to grow and succeed in the digital world.
            </p>
          </div>
          
          {/* Team members section */}
          <div className="flex flex-wrap -m-2">
            {/* Team member 1 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Sarah Williams
                  </h2>
                  <p className="text-gray-500">Lead Developer</p>
                </div>
              </div>
            </div>
            {/* Team member 2 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Michael Johnson
                  </h2>
                  <p className="text-gray-500">UI/UX Designer</p>
                </div>
              </div>
            </div>
            {/* Team member 3 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Emily Davis
                  </h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            {/* Team member 4 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Jason Clark
                  </h2>
                  <p className="text-gray-500">Project Manager</p>
                </div>
              </div>
            </div>
            {/* Team member 5 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Olivia Carter
                  </h2>
                  <p className="text-gray-500">Content Strategist</p>
                </div>
              </div>
            </div>
            {/* Team member 6 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Liam Robinson
                  </h2>
                  <p className="text-gray-500">SEO Specialist</p>
                </div>
              </div>
            </div>
            {/* Team member 7 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Ava Lee
                  </h2>
                  <p className="text-gray-500">Web Developer</p>
                </div>
              </div>
            </div>
            {/* Team member 8 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/104x94"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Zoe King</h2>
                  <p className="text-gray-500">Business Analyst</p>
                </div>
              </div>
            </div>
            {/* Team member 9 */}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/108x98"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Jacob Miller
                  </h2>
                  <p className="text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
