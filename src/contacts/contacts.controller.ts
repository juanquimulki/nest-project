import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma, Contact } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findOne({ id: Number(id) });
  }

  @Post()
  async create(@Body() data: Prisma.ContactCreateInput): Promise<Contact> {
    return this.contactsService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.delete({ id: Number(id) });
  }
}
