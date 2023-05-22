import { Module } from '@nestjs/common';
import { BotTelegramController } from './bot-telegram.controller';
import { BotTelegramService } from './bot-telegram.service';
import { TelegramModule } from 'nestjs-telegram';

@Module({
  imports: [TelegramModule.forRoot({
    botKey: '' // Pon tu Bot Key aqui
  })],
  controllers: [BotTelegramController],
  providers: [BotTelegramService]
})
export class BotTelegramModule {}
