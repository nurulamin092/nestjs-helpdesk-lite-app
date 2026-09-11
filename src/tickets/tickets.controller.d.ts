import { TicketsService } from './tickets.service.js';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { UpdateTicketDto } from './dto/update-ticket.dto.js';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    findAll(filters: FilterTicketsQueryDto): import("./ticket.interface.js").Ticket[];
    findOne(id: string): import("./ticket.interface.js").Ticket;
    create(createTicketDto: CreateTicketDto): import("./ticket.interface.js").Ticket;
    update(id: number, updateTicketDto: UpdateTicketDto): import("./ticket.interface.js").Ticket;
}
