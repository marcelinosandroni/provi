import { Injectable } from '@nestjs/common'
import { SubscribeDTO } from './dto/subscribe.dto'
import { UnsubscribeDTO } from './dto/unsubscribe.dto'

@Injectable()
export class NewsletterService {
  add(subscriber: SubscribeDTO) {
    return 'This action adds a new newsletter'
  }

  remove(subscriber: UnsubscribeDTO) {
    return `This action returns all newsletter`
  }

  welcomeMessage() {}
}
