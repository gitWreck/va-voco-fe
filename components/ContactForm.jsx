"use client"; 
import { useState, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPaperPlane, 
  faSpinner, 
  faCheckCircle, 
  faTimesCircle 
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const formRef = useRef(null); // Reference to reset form after success

  async function handleSubmit(formData) {
    setStatus('loading'); // Show Loading Modal immediately
    
    // Optional: Add a tiny artificial delay so the user sees the loading spinner
    // await new Promise(resolve => setTimeout(resolve, 800));

    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus('success');
      formRef.current?.reset(); // Clear the form fields behind the modal
    } else {
      setStatus('error');
    }
  }

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
          
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="lastname" 
                type="text" 
                required
                placeholder="Lastname" 
                className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition" 
              />
              <input 
                name="firstname" 
                type="text" 
                required
                placeholder="Firstname" 
                className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition" 
              />
            </div>
            <input 
              name="email" 
              type="email" 
              required
              placeholder="Email" 
              className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition" 
            />
            <input 
              name="subject" 
              type="text" 
              required
              placeholder="Subject" 
              className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition" 
            />
            <textarea 
              name="message" 
              required
              placeholder="Message" 
              rows="5" 
              className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
            ></textarea>
            
            {/* UPDATED BUTTON WITH HOVER EFFECTS */}
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-brand-navy text-white font-bold py-4 rounded-lg 
                         hover:bg-brand-cyan hover:text-brand-navy hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Send Message</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>

          {/* === MODAL OVERLAY (Loading / Success / Error) === */}
          {status && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
              <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform transition-all scale-100 border border-gray-100">
                
                {/* 1. LOADING STATE */}
                {status === 'loading' && (
                  <div className="flex flex-col items-center py-4">
                    <FontAwesomeIcon icon={faSpinner} spin className="text-5xl text-brand-cyan mb-6" />
                    <h3 className="text-xl font-bold text-gray-800">Sending...</h3>
                    <p className="text-gray-500 mt-2 text-sm">Please wait while we send your message.</p>
                  </div>
                )}

                {/* 2. SUCCESS STATE */}
                {status === 'success' && (
                  <div className="flex flex-col items-center animate-fadeIn py-2">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      We have received your message and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus(null)}
                      className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 hover:shadow-lg transition transform hover:-translate-y-0.5 w-full"
                    >
                      Close
                    </button>
                  </div>
                )}

                {/* 3. ERROR STATE */}
                {status === 'error' && (
                  <div className="flex flex-col items-center animate-fadeIn py-2">
                    <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-4xl text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Failed to Send</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Something went wrong. Please check your connection and try again.
                    </p>
                    <button 
                      onClick={() => setStatus(null)}
                      className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:shadow-lg transition transform hover:-translate-y-0.5 w-full"
                    >
                      Try Again
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}
          {/* === END MODAL === */}

        </div>
      </div>
    </section>
  );
};

export default ContactForm;