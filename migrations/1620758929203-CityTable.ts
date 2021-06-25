import { MigrationInterface, QueryRunner } from 'typeorm';

export class CityTable1620758929203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE city (id SERIAL PRIMARY KEY, departmentId bigint NOT NULL, code int NOT NULL, name varchar(255) NOT NULL)
    `);

    await queryRunner.query(`ALTER SEQUENCE city_id_seq RESTART WITH 1127`);

    await queryRunner.query(
      `ALTER TABLE city ADD CONSTRAINT city_department_fk_01 FOREIGN KEY (departmentId) REFERENCES department (id)`,
    );

    await queryRunner.query(`CREATE INDEX city_idx_01 ON city (departmentId)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE city CASCADE`);
  }
}
