import { Module } from '@nestjs/common'
import { AuthorizationService } from './authorization.service'
import { RoleGuard } from '../guards/role.guard'

@Module({
  providers: [AuthorizationService, RoleGuard],
  exports: [RoleGuard],
})
export class AuthorizationModule {}
