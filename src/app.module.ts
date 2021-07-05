import { ConfigModule, ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { CoursesModule } from './courses/courses.module'
import { NewsletterModule } from './modules/newsletter/newsletter.module'
import { UserModule } from './modules/user/user.module'
import { AuthorizationModule } from './authorization/authorization.module'
import * as config from './config'
import { MongooseModule } from '@nestjs/mongoose'
import MongoConnection from './factories/mongodbConnection'

console.log(Object.keys(config))

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: Object.values(config) }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: MongoConnection,
    }),
    AuthorizationModule,
    CoursesModule,
    NewsletterModule,
    UserModule,
  ],
})
export class AppModule {}
