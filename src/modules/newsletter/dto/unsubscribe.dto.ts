import { PickType } from '@nestjs/mapped-types'
import { SubscribeDTO } from './subscribe.dto'

export class UnsubscribeDTO extends PickType(SubscribeDTO, ['email']) {}
