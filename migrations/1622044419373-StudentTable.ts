import { MigrationInterface, QueryRunner } from 'typeorm';

export class StudentTable1622044419373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE student (
          id SERIAL PRIMARY KEY,schoolId bigint NOT NULL,name varchar(255) NOT NULL, lastName varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL)
      `);

    await queryRunner.query(`ALTER SEQUENCE student_id_seq RESTART WITH 1`);

    await queryRunner.query(`ALTER TABLE student
          ADD CONSTRAINT student_school_fk_01 FOREIGN KEY (schoolId) REFERENCES school (id)
        `);

    await queryRunner.query(`ALTER TABLE student
        ADD CONSTRAINT UQ_student_email UNIQUE (email)
        `);

    await queryRunner.query(
      `CREATE INDEX student_idx_01 ON student (schoolId)`,
    );

    await queryRunner.query(`CREATE INDEX student_idx_02 ON student (email)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE student CASCADE`);
  }
}
