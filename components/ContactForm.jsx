"use client"; // Required for form interactivity
import { useState } from "react";
import { submitContactForm } from "@/app/actions"; // Import the server action

const ContactForm = () => {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  async function handleSubmit(formData) {
    setStatus('loading');
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus('success');
      // Optional: Reset form here if needed
    } else {
      setStatus('error');
    }
  }

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
          
          {/* Success Message Overlay */}
          {status === 'success' ? (
            <div className="text-center p-10 bg-green-50 rounded-lg">
              <h3 className="text-2xl text-green-700 font-bold mb-2">Thank You!</h3>
              <p className="text-green-600">Your message has been received.</p>
              <button onClick={() => setStatus(null)} className="mt-4 text-green-700 underline">Send another</button>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  name="lastname" // CRITICAL: This connects to formData.get('name')
                  type="text" 
                  required
                  placeholder="Lastname" 
                  className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue" 
                />
                <input 
                  name="firstname" // CRITICAL: This connects to formData.get('name')
                  type="text" 
                  required
                  placeholder="Firstname" 
                  className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue" 
                />
              </div>
              <input 
                name="email" // CRITICAL
                type="email" 
                required
                placeholder="Email" 
                className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue" 
              />
                <input 
                  name="subject" // CRITICAL
                  type="text" 
                  required
                  placeholder="Subject" 
                  className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue" 
                />
              <textarea 
                name="message" // CRITICAL
                required
                placeholder="Message" 
                rows="5" 
                className="w-full p-4 text-black border rounded bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-brand-blue"
              ></textarea>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-navy text-white font-bold py-4 rounded hover:bg-opacity-90 transition disabled:bg-gray-400"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;