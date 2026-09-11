import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { UpdateTicketDto } from './dto/update-ticket.dto.js';

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
  private nextTicketId = 4;
  findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
    let tickets = this.tickets;

    if (status) {
      tickets = tickets.filter((ticket) => ticket.status === status);
    }
    if (priority) {
      tickets = tickets.filter((ticket) => ticket.priority === priority);
    }
    return tickets;
  }

  create(createTicketDto: CreateTicketDto) {
    const ticket: Ticket = {
      id: this.nextTicketId++,
      subject: createTicketDto.subject,
      description: createTicketDto.description,
      priority: createTicketDto.priority,
      status: 'open',
      createdAt: new Date().toISOString(),
    };
    this.tickets.push(ticket);
    return ticket;
  }
  findOne(id: number) {
    const ticket = this.tickets.find((ticket) => ticket.id === id);
    if (!ticket) {
      throw new NotFoundException(`Ticket with id ${id} not found`);
    }
    return ticket;
  }
  update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = this.findOne(id);

    if (ticket.status === 'closed') {
      throw new BadRequestException(
        `Ticket with id ${id} is closed and cannot be updated`,
      );
    }
    Object.assign(ticket, updateTicketDto);
    return ticket;
  }

  closeTicket(id: number) {
    const ticket = this.findOne(id);
    if (ticket.status === 'closed') {
      throw new BadRequestException(`Ticket with id ${id} is already closed`);
    }
    ticket.status = 'closed';
    return ticket;
  }
}
