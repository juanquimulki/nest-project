import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { CustomersService } from './customers/customers.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, CustomersController, ContactsController],
  providers: [AppService, ContactsService, CustomersService, PrismaService],
})
export class AppModule {}
