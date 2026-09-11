var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let TicketsService = class TicketsService {
    constructor() {
        this.tickets = [
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
        this.nextTicketId = 4;
    }
    findAll(status, priority) {
        let tickets = this.tickets;
        if (status) {
            tickets = tickets.filter((ticket) => ticket.status === status);
        }
        if (priority) {
            tickets = tickets.filter((ticket) => ticket.priority === priority);
        }
        return tickets;
    }
    create(createTicketDto) {
        const ticket = {
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
    findOne(id) {
        const ticket = this.tickets.find((ticket) => ticket.id === id);
        if (!ticket) {
            throw new NotFoundException(`Ticket with id ${id} not found`);
        }
        return ticket;
    }
    update(id, updateTicketDto) {
        const ticket = this.findOne(id);
        Object.assign(ticket, updateTicketDto);
        return ticket;
    }
};
TicketsService = __decorate([
    Injectable()
], TicketsService);
export { TicketsService };
//# sourceMappingURL=tickets.service.js.map