import Joi, { SchemaMap } from 'joi';
import { Config, Environments } from './config.model';

export const CONFIG_SCHEMA = Joi.object<Config, true>({
  ENVIRONMENT: Joi.string().valid(...Object.keys(Environments)),
  DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().required(),
} satisfies SchemaMap<Config, true>);
