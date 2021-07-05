import { ConfigService } from '@nestjs/config'
import { DatabaseConfig } from 'src/config'

export default (config: ConfigService) => {
  const { host, port, name, user, pass } = config.get<DatabaseConfig>('db')
  return {
    uri: `mongodb://${user}:${pass}@${host}:${port}/${name}`,
    useNewUrlParser: true,
    authSource: 'admin',
  }
}
