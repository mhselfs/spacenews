import React from 'react'
import img1 from "../assets/images/trending.png";
import imgA from "../assets/images/A.png";


function TreadingNews() {
  return (
    <div className='mx-4 md:m-10'>
      <h2 className='mb-6'>Treadning News</h2>
      <div className="flex flex-col md:flex-row justify-start gap-6 lg:gap-10">
        {/* Image */}
        <div className="w-full lg:w-full h-auto">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-lg max-h-[400px] sm:max-h-[500px] lg:max-h-[596px]"
          />
        </div>

        {/* Content */}
        <div className="w-full h-full lg:max-w-xl">
          <h3 className="text-3xl lg:text-5xl lg:leading-16 leading-8">
            Axiom Space Refines Training for Next Astronauts Mission
          </h3>
          {/* Article */}
          <div className='flex flex-col md:flex-row gap-42 text-sm leading-6 text-black mt-4'>
            <div className="text-justify">
              <p className='first-letter:text-4xl first-letter:font-semibold text-sm text-justify leading-6'>
                An American company that organises visits to the
                A International Space Station
                <br />
                
                Houston-based Axiom has signed a
                memorandum of understanding with
                the UK Space Agency to try to make it
                happen.
                <br />
                
                The project would probably cost
                £200m or more, but the idea is that it
                would be funded commercially. There
                would be no contribution from UK
                taxpayers. Axiom told the BBC that
                conversations with corporations and
                institutions interested in providing
                finance were already under way
                <br />
                The last UK individual to go into orbit
                was Tim Peake, who flew to the ISS as
                a European Space Agency (Esa)
                astronaut in 2015.
                <br />
                
                "This is an exciting opportunity and
                actually unique, he commented.

                No-one has done a national mission ,
                commercially, like this before. It s a
                new model and would be paving the
                way for how we do space in the
                future."
                <br />
                
                Details are sparse at the moment. No
                crew has been chosen, nor is there a
                concept yet for how it would be
                selected.
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center my-6 gap-4'>
            <span className='text-sm text-black'>
              Space and Universe | 9 mins read
            </span>
            <button className='rounded-xl border-1 p-1 text-sm'>
              Continue Reading
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default TreadingNews