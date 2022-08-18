import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Contact } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async findOne(id: Prisma.ContactWhereUniqueInput): Promise<Contact | null> {
    return this.prisma.contact.findUnique({ where: id });
  }

  async create(data: Prisma.ContactCreateInput): Promise<Contact> {
    return this.prisma.contact.create({ data });
  }

  async delete(id: Prisma.ContactWhereUniqueInput): Promise<Contact> {
    return this.prisma.contact.delete({ where: id });
  }
}
