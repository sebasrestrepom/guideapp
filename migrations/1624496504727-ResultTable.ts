import { MigrationInterface, QueryRunner } from 'typeorm';

export class ResultTable1624496504727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE resultg (id SERIAL PRIMARY KEY,studentId bigint NOT NULL)`);

    await queryRunner.query(`ALTER TABLE resultg ADD CONSTRAINT result_student_fk_01 FOREIGN KEY (studentId) REFERENCES student (id)
        `);

    await queryRunner.query(
      `CREATE INDEX result_idx_01 ON resultg (studentId)`,
    );

    await queryRunner.query(`
    CREATE TABLE resultDetail (
      id SERIAL PRIMARY KEY,resultId bigint NOT NULL,questionId bigint NOT NULL,value varchar(255) NOT NULL);
  `);

    await queryRunner.query(`ALTER TABLE resultDetail ADD CONSTRAINT resultDetail_result_fk_01 FOREIGN KEY (resultId) REFERENCES resultg (id)
    `);

    await queryRunner.query(`ALTER TABLE resultDetail ADD CONSTRAINT resultDetail_question_fk_01 FOREIGN KEY (questionId) REFERENCES question (id)
  `);

    await queryRunner.query(
      `CREATE INDEX resultDetail_idx_01 ON resultDetail (resultId)`,
    );

    await queryRunner.query(
      `CREATE INDEX resultDetail_idx_02 ON resultDetail (questionId)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE resultg CASCADE`);

    await queryRunner.query(`DROP TABLE resultDetail CASCADE`);
  }
}
