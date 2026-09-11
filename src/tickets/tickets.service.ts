import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [
    {
      id: 1,
      subject: 'Issue with login',
      description: 'Unable to login with correct credentials',
      priority: 'high',
      status: 'open',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      subject: 'Feature request',
      description: 'Add dark mode to the application',
      priority: 'medium',
      status: 'open',
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      subject: 'Bug in dashboard',
      description: 'Dashboard not loading for some users',
      priority: 'high',
      status: 'closed',
      createdAt: new Date().toISOString(),
    },
  ];
  findAll() {
    return this.tickets;
  }
  findOne(id: number) {
    return this.tickets.find((ticket) => ticket.id === id);
  }
}
