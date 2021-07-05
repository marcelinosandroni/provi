import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { User, UserSchema } from './schemas/user.schema'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // MongooseModule.forRoot('mongodb://test:test@mongo:27017/provi', {
    //   useNewUrlParser: true,
    //   authSource: 'admin',
    // }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
