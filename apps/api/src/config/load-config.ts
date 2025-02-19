import { Config, Environments } from './config.model';
export const loadConfig = (): Config => {
  return {
    ENVIRONMENT: process.env.NODE_ENV?.toUpperCase() as Environments,
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: parseInt(process.env.PORT),
  };
};
