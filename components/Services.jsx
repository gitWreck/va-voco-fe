"use client"; // Required for interactivity (onClick)
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeadset, 
  faPhoneVolume, 
  faScrewdriverWrench, 
  faEnvelopeOpenText, 
  faComments, 
  faChessKnight, 
  faCheckCircle,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Expanded Data with Icons, "Why Us", and Details
  const services = [
    { 
      title: "Inbound Support", 
      desc: "Handling customer inquiries efficiently.", 
      icon: faHeadset,
      details: "We act as the frontline of your business, managing incoming calls and queries with empathy and professionalism. Our agents are trained to resolve issues on the first contact.",
      whyUs: ["24/7 Availability", "Multi-lingual Support", "High First-Contact Resolution"],
      metric: "98% Customer Satisfaction"
    },
    { 
      title: "Outbound Sales", 
      desc: "Driving growth through targeted calls.", 
      icon: faPhoneVolume,
      details: "Our proactive sales team helps you generate leads and close deals. We use data-driven strategies to reach the right customers at the right time.",
      whyUs: ["Targeted Lead Generation", "Professional Scripting", "High Conversion Rates"],
      metric: "3X ROI on Average"
    },
    { 
      title: "Technical Support", 
      desc: "Solving complex technical issues.", 
      icon: faScrewdriverWrench,
      details: "From software troubleshooting to hardware diagnostics, our tech experts guide your users through complex problems with simple, clear instructions.",
      whyUs: ["Tier 1, 2 & 3 Support", "Remote Desktop Assistance", "Detailed Ticket Tracking"],
      metric: "< 15 min Resolution Time"
    },
    { 
      title: "Email Support", 
      desc: "Fast and accurate written responses.", 
      icon: faEnvelopeOpenText,
      details: "We manage your inbox to ensure zero backlog. Our responses are personalized, accurate, and perfectly aligned with your brand voice.",
      whyUs: ["Zero Backlog Guarantee", "Custom Templates", "Tone-Matching AI Tools"],
      metric: "1 Hour Avg Response"
    },
    { 
      title: "Live Chat", 
      desc: "Real-time assistance for web visitors.", 
      icon: faComments,
      details: "Engage visitors the moment they land on your site. We answer questions instantly, reducing bounce rates and increasing sales conversions.",
      whyUs: ["Real-time Engagement", "Proactive Greetings", "Chatbot Hybrid Options"],
      metric: "20% Boost in Conversions"
    },
    { 
      title: "Consulting", 
      desc: "Strategies to improve your operations.", 
      icon: faChessKnight,
      details: "Not sure where to start? We audit your current CX processes and build a roadmap to optimize efficiency and reduce costs.",
      whyUs: ["Process Auditing", "Tech Stack Review", "Training Manual Creation"],
      metric: "Proven Scalability Plans"
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
        
        {/* GRID OF SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedService(service)}
              className="bg-brand-cyan p-8 rounded-lg hover:bg-brand-navy transition group cursor-pointer shadow-md hover:shadow-2xl transform hover:-translate-y-2 duration-300"
            >
              <div className="mb-6">
                <FontAwesomeIcon 
                icon={service.icon} 
                className="text-white group-hover:text-brand-yellow transition" 
                style={{ height: '80px', width: '80px' }}/>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/90 group-hover:text-gray-200">{service.desc}</p>
              {/* <button className="mt-6 text-sm font-bold text-white underline decoration-white/50 group-hover:decoration-brand-yellow">
                Learn More &rarr;
              </button> */}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop (Darken background) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)} // Close when clicking outside
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fadeIn">
            
            {/* Modal Header */}
            <div className="bg-brand-navy p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={selectedService.icon} className="h-8 w-8 text-brand-yellow" />
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 text-left">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {selectedService.details}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Why Choose Us */}
                <div>
                  <h4 className="font-bold text-brand-navy mb-4 uppercase text-sm tracking-wider">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    {selectedService.whyUs.map((reason, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-brand-cyan mr-2 mt-0.5" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metric/Highlight Box */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-center items-center text-center">
                   <span className="text-gray-500 text-sm uppercase mb-2">Success Metric</span>
                   <span className="text-3xl font-extrabold text-brand-blue">{selectedService.metric}</span>
                </div>
              </div>

              {/* Modal Footer / CTA */}
              <div className="flex justify-end gap-4 border-t pt-6">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 text-gray-500 font-bold hover:text-gray-800 transition"
                >
                  Close
                </button>
                <Link 
                  href="#contact" 
                  onClick={() => setSelectedService(null)} // Close modal when navigating
                  className="px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-navy transition shadow-lg"
                >
                  Get a Quote for {selectedService.title.split(' ')[0]}
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Services;