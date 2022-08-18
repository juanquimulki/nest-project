import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Prisma, Customer } from '@prisma/client';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne({ id: Number(id) });
  }

  @Post()
  async create(@Body() data: Prisma.CustomerCreateInput): Promise<Customer> {
    return this.customersService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Customer> {
    return this.customersService.delete({ id: Number(id) });
  }
}
