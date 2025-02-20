import { Kysely, sql } from 'kysely';

export const USER_TABLE_NAME = 'user';
export const createUserTable = (db: Kysely<unknown>) =>
  db.schema
    .createTable(USER_TABLE_NAME)
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('email', 'varchar', (col) => col.notNull().unique())
    .addColumn('password', 'varchar', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
