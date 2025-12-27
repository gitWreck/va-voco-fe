import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl bg-gray-300">
            <Image 
                src="/img_about_2.png" 
                alt="Call Center Background"
                fill
                className="object-cover object-[center_100%]" 
                priority
            />
          </div>
        </div>
        
        {/* Right Side: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            We Are The Best
          </h2>
          <p className="text-white mb-6 leading-relaxed">
            Every day, we help businesses connect with their customers in meaningful ways. 
            Our technology and training ensure that every interaction is professional and productive.
          </p>
          <ul className="space-y-4 mb-8">
             <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2">✓</span> High Quality Services
             </li>
             <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2">✓</span> Professional Team
             </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;