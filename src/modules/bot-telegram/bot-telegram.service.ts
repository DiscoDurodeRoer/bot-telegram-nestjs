import { Injectable } from '@nestjs/common';
import { TelegramSendMessageParams, TelegramService } from 'nestjs-telegram';

@Injectable()
export class BotTelegramService {

    constructor(private telegramService: TelegramService) { }

    sendMessage(chatId: number, message: string) {

        const params: TelegramSendMessageParams = {
            chat_id: chatId,
            text: message
        }

        this.telegramService.sendMessage(params).subscribe({
            next: (result) => {
                console.log(result);
                if (result) {
                    console.log("Se ha enviado el mensaje correctamente");
                } else {
                    console.log("No se ha enviado el mensaje correctamente");
                }
            }, error: (err) => {
                console.error("Error => ", err);
            }
        })

    }


}
