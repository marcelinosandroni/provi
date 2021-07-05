import { registerAs } from '@nestjs/config'

export const appConfig = registerAs('app', () => ({
  title: process.env.APP_TITLE,
  port: parseInt(process.env.APP_PORT, 10),
}))
