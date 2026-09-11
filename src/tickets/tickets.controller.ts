import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Post,
  Body,
} from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}
  @Get()
  findAll(@Query() filters: FilterTicketsQueryDto) {
    return this.ticketsService.findAll(filters.status, filters.priority);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.ticketsService.findOne(parseInt(id));
  }
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }
}
