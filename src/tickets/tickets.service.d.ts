import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { UpdateTicketDto } from './dto/update-ticket.dto.js';
export declare class TicketsService {
    private readonly tickets;
    private nextTicketId;
    findAll(status?: Ticket['status'], priority?: Ticket['priority']): Ticket[];
    create(createTicketDto: CreateTicketDto): Ticket;
    findOne(id: number): Ticket;
    update(id: number, updateTicketDto: UpdateTicketDto): Ticket;
}
