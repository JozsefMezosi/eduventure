import { KeysMap } from 'src/common/model/keys-map.model';

export type Environments = 'PROD' | 'DEV';
export const Environments: KeysMap<Environments> = {
  DEV: 'DEV',
  PROD: 'PROD',
};

export interface Config {
  ENVIRONMENT: Environments;
  DATABASE_URL: string;
  PORT: number;
}
