import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { NewsletterService } from './newsletter.service'
import { SubscribeDTO } from './dto/subscribe.dto'
import { UnsubscribeDTO } from './dto/unsubscribe.dto'

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post('/subscribe')
  subscribe(@Body() subscriber: SubscribeDTO) {
    return this.newsletterService.add(subscriber)
  }

  @Post('/unsubscribe')
  unsubscribe(@Body() subscriber: UnsubscribeDTO) {
    return this.newsletterService.remove(subscriber)
  }
}
