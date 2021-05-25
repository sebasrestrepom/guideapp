import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoryTable1621100333212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE category (
          id SERIAL PRIMARY KEY,name varchar(255) NOT NULL);
      `);

    await queryRunner.query(`ALTER SEQUENCE category_id_seq RESTART WITH 1127`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE category CASCADE`);
  }
}
