import { MigrationInterface, QueryRunner } from 'typeorm';

export class QuestionTable1621103256716 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE question (
          id SERIAL PRIMARY KEY,categoryId bigint NOT NULL,vocationId bigint NOT NULL,name varchar(255) NOT NULL);
      `);

    await queryRunner.query(`ALTER SEQUENCE question_id_seq RESTART WITH 1127`);

    await queryRunner.query(`ALTER TABLE question ADD CONSTRAINT question_category_fk_01 FOREIGN KEY (categoryId) REFERENCES category (id)
        `);

    await queryRunner.query(`ALTER TABLE question ADD CONSTRAINT question_vocation_fk_01 FOREIGN KEY (vocationId) REFERENCES vocation (id)
      `);

    await queryRunner.query(
      `CREATE INDEX question_idx_01 ON question (categoryId)`,
    );

    await queryRunner.query(
      `CREATE INDEX question_idx_02 ON question (vocationId)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE question CASCADE`);
  }
}
