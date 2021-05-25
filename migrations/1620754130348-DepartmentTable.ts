import { MigrationInterface, QueryRunner } from 'typeorm';

export class DepartmentTable1620754130348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE department (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL, code int NOT NULL)`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE department_id_seq RESTART WITH 34`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE department CASCADE`);
  }
}
