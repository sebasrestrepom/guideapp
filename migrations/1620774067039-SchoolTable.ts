import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchoolTable1620774067039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE school (
          id SERIAL PRIMARY KEY,cityId bigint NOT NULL,name varchar(255) NOT NULL);
      `);

    await queryRunner.query(`ALTER SEQUENCE school_id_seq RESTART WITH 1127;`);

    await queryRunner.query(`ALTER TABLE school
          ADD CONSTRAINT school_city_fk_01 FOREIGN KEY (cityId) REFERENCES city (id);
        `);

    await queryRunner.query(`CREATE INDEX school_idx_01 ON school (cityId)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE school CASCADE`);
  }
}
