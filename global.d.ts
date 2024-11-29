import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
    interface Error{
      statusCode?:number
    }
  }

  var prisma: PrismaClient | undefined;
}
