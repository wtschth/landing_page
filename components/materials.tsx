import Image from 'next/image'

// Change these images to represent your filament materials
import EGlassImage from '@/public/images/Eglass.jpg'
import SGlassImage from '@/public/images/SGlass.jpg'
import T700CarbonImage from '@/public/images/T700Carbon.jpg'

export default function Materials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Filament Winding Materials</div>
            <h1 className="h2 mb-4">Comprehensive Material Solutions</h1>
            <p className="text-xl text-gray-400">Offering a variety of materials tailored for filament winding applications to optimize your production process.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item - E-Glass Fiber */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={EGlassImage} width={540} height={405} alt="E-Glass Fiber" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">E-Glass Fiber</h3>
                  <p className="text-xl text-gray-400 mb-4">A versatile material known for its great mechanical properties and cost-effectiveness. Often used in marine and automotive applications.</p>
                  {/* You can expand on properties, applications or any other details here */}
                </div>
              </div>
            </div>

            {/* 2nd item - S-Glass Fiber */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={SGlassImage} width={540} height={405} alt="S-Glass Fiber" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">S-Glass Fiber</h3>
                  <p className="text-xl text-gray-400 mb-4">Offering enhanced mechanical properties over E-Glass. It's commonly used in aerospace and defense applications.</p>
                  {/* Expand on properties, applications or other details */}
                </div>
              </div>
            </div>

            {/* 3rd item - T700 Carbon Fiber */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={T700CarbonImage} width={540} height={405} alt="T700 Carbon Fiber" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">T700 Carbon Fiber</h3>
                  <p className="text-xl text-gray-400 mb-4">A high-performance carbon fiber known for its excellent tensile strength and stiffness, making it ideal for load-bearing applications in aerospace and automotive sectors.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>High tensile strength and modulus</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Low weight with high performance</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Corrosion resistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* You can continue with the other materials like Pitch Carbon Fiber, UL94-V0 filler, gelcoat, and epoxy coating in a similar fashion. */}
          </div>

        </div>
      </div>
    </section>
  )
}

