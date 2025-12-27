import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const features = [
    { 
      title: "24/7 Support", 
      desc: "Always available for your customers.", 
      icon: faClock // Pass the imported icon object directly
    },
    { 
      title: "Expert Team", 
      desc: "Highly trained professionals.", 
      icon: faUsers 
    },
    { 
      title: "Global Reach", 
      desc: "Connecting you worldwide.", 
      icon: faEarthAmericas 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-navy p-8 border border-gray-100 shadow-lg rounded-lg hover:shadow-xl transition group flex items-start gap-6 text-left"
            >
              {/* Icon Wrapper (flex-shrink-0 stops it from getting squished) */}
              <div className="flex-shrink-0">
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  // Changed text color to 'text-brand-yellow' so it shows up on the dark background
                  className="text-brand-yellow group-hover:text-white transition-colors duration-300" 
                  style={{ height: '80px', width: '80px' }}
                />
              </div>

              {/* Text Wrapper */}
              <div>
                {/* Changed text to white for contrast against brand-navy */}
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;