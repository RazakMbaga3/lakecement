// app/components/ui/Newsletter.jsx
'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the email to your backend
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubscribeStatus({
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      });
      setEmail('');
    } catch (error) {
      setSubscribeStatus({
        success: false,
        message: 'There was an error subscribing to the newsletter. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-blue-900 text-white rounded-sm py-8 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl text-nyati-light-orange font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">Receive the latest news and updates from Nyati Cement.</p>
        
        {subscribeStatus && (
          <div className={`mb-6 p-4 rounded-sm text-left ${subscribeStatus.success ? 'bg-green-800/50 text-green-100' : 'bg-red-800/50 text-red-100'}`}>
            {subscribeStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-sm bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-nyati-orange"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-sm bg-nyati-orange text-white font-medium hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}