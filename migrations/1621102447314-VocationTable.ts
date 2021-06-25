import { MigrationInterface, QueryRunner } from 'typeorm';

export class VocationTable1621102447314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE vocation (
          id SERIAL PRIMARY KEY,code varchar(255) NOT NULL,name varchar(255) NOT NULL);
      `);

    await queryRunner.query(`ALTER SEQUENCE vocation_id_seq RESTART WITH 1127`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE vocation CASCADE`);
  }
}
