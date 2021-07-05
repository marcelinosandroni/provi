import { SetMetadata } from '@nestjs/common';

export const Logged = (...args: string[]) => SetMetadata('logged', args);
