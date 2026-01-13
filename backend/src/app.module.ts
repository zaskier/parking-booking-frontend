import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'

import { TypeOrmModule } from '@nestjs/typeorm'
import { OffersModule } from './offers/offers.module'
import { SeedModule } from './database/seeds/seed.module'
import { CqrsModule } from '@nestjs/cqrs'
import { dataSourceOptions } from './database/config/data-source'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    CqrsModule,
    OffersModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
