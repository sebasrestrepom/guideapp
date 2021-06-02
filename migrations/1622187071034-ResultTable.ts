import { MigrationInterface, QueryRunner } from 'typeorm';

export class ResultTable1622187071034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE result (id SERIAL PRIMARY KEY,studentId bigint NOT NULL)`);

    await queryRunner.query(`ALTER TABLE result ADD CONSTRAINT result_student_fk_01 FOREIGN KEY (studentId) REFERENCES student (id)
        `);

    await queryRunner.query(`CREATE INDEX result_idx_01 ON result (studentId)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE result CASCADE`);
  }
}
