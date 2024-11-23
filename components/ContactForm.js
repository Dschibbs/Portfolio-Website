import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";

const ContactForm = ({ blok }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Hier können Sie die Formulardaten an Ihren gewünschten Endpunkt senden
      // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      setStatus('success');
      e.target.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section 
      className="py-16 px-4 bg-gray-50"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-3xl mx-auto">
        {/* Überschrift */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">
            {blok.title}
          </h2>
          <p className="text-xl text-gray-600">
            {blok.description}
          </p>
        </div>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Betreff */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Betreff
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Nachricht */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Nachricht
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {status === 'sending' ? 'Wird gesendet...' : blok.submitText || 'Nachricht senden'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-green-600 text-center">{blok.successMessage || 'Ihre Nachricht wurde erfolgreich gesendet!'}</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">{blok.errorMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
