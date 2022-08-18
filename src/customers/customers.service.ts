import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Customer } from '@prisma/client';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany();
  }

  async findOne(id: Prisma.CustomerWhereUniqueInput): Promise<Customer | null> {
    return this.prisma.customer.findUnique({
      where: id,
      include: { contacts: true },
    });
  }

  async create(data: Prisma.CustomerCreateInput): Promise<Customer> {
    return this.prisma.customer.create({ data });
  }

  async delete(id: Prisma.CustomerWhereUniqueInput): Promise<Customer> {
    return this.prisma.customer.delete({ where: id });
  }
}
