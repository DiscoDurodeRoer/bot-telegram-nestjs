import { Body, Controller, Post } from '@nestjs/common';
import { BotTelegramService } from './bot-telegram.service';
import { MessageDto } from './dto/message-dto';

@Controller('bot-telegram')
export class BotTelegramController {

    constructor(private botTelegramService: BotTelegramService){}

    @Post()
    sendMessage(@Body() messageDto: MessageDto){
        return this.botTelegramService.sendMessage(messageDto.chatId, messageDto.message);
    }

}
