/* eslint-disable @typescript-eslint/no-unused-vars -- TODO remove when the first schema is created*/
import { Kysely } from 'kysely';
import { createUserTable, USER_TABLE_NAME } from './create-user-table';

export async function up(db: Kysely<unknown>): Promise<void> {
  await createUserTable(db);
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable(USER_TABLE_NAME).execute();
}
