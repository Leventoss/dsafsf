// src/utils/ticketService.js
const generateTicketId = () => {
  return 'TKT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

const mockDatabase = {
  tickets: new Map()
};

export const createTicket = async (ticketData) => {
  const ticketId = generateTicketId();
  const ticket = {
    id: ticketId,
    ...ticketData,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updates: []
  };

  mockDatabase.tickets.set(ticketId, ticket);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return ticketId;
};

export const getTicketStatus = async (ticketId) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const ticket = mockDatabase.tickets.get(ticketId);
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  
  return {
    status: ticket.status,
    updates: ticket.updates
  };
};

export const updateTicket = async (ticketId, update) => {
  const ticket = mockDatabase.tickets.get(ticketId);
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  
  ticket.updates.push({
    timestamp: new Date().toISOString(),
    content: update
  });
  
  mockDatabase.tickets.set(ticketId, ticket);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return ticket;
};