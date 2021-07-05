import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthorizationService {
  // constructor(private tokenService: any) {}

  generate(payload: any) {}

  verify(token: any) {}

  validate(roles: string[]) {
    console.log('validate')
  }
}
