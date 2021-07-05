import { registerAs } from '@nestjs/config'

export const cacheConfig = registerAs('cache', () => ({
  host: process.env.CACHE_HOST,
  port: parseInt(process.env.CACHE_PORT, 10),
}))
