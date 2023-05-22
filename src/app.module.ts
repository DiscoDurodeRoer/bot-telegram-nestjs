import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotTelegramModule } from './modules/bot-telegram/bot-telegram.module';

@Module({
  imports: [BotTelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
