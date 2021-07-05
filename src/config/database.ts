import { registerAs } from '@nestjs/config'

export const dbConfig = registerAs(
  'db',
  (): DatabaseConfig => ({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  }),
)

export interface DatabaseConfig {
  host: string
  port: number
  name: string
  user: string
  pass: string
}
