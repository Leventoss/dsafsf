// src/components/Support.jsx
import React, { useState } from 'react';
import { createTicket, getTicketStatus } from '../utils/ticketService';

const Support = () => {
  const [formData, setFormData] = useState({
    username: '',
    category: 'general',
    description: '',
  });
  const [ticketId, setTicketId] = useState(null);
  const [status, setStatus] = useState(null);

  const categories = [
    { id: 'general', name: 'General Support' },
    { id: 'technical', name: 'Technical Issues' },
    { id: 'abuse', name: 'Report Abuse' },
    { id: 'billing', name: 'Billing Issues' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createTicket(formData);
    setTicketId(id);
    setStatus('submitted');
    setFormData({ username: '', category: 'general', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="support" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow">Support Center</h2>
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg hover-glow">
          {!ticketId ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Minecraft Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-black/50 border border-gray-700 focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-black/50 border border-gray-700 focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-black/50 border border-gray-700 focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded font-medium transition-all duration-300 hover-glow"
              >
                Submit Ticket
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">Ticket Submitted!</div>
              <p className="text-gray-400 mb-4">Your ticket ID: {ticketId}</p>
              <button
                onClick={() => setTicketId(null)}
                className="py-2 px-4 bg-white/10 hover:bg-white/20 rounded font-medium transition-all duration-300"
              >
                Submit Another Ticket
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Support;