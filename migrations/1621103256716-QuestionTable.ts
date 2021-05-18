import { MigrationInterface, QueryRunner } from 'typeorm';

export class QuestionTable1621103256716 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE question (
            id bigint(20) NOT NULL,categoryId bigint(20) NOT NULL,vocationId bigint(20) NOT NULL,name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      `);
    await queryRunner.query(
      `ALTER TABLE question ADD PRIMARY KEY (id), ADD KEY categoryId (categoryId),ADD KEY vocationId (vocationId);`,
    );
    await queryRunner.query(`ALTER TABLE question
          MODIFY id bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1127;`);
    await queryRunner.query(`ALTER TABLE question
          ADD CONSTRAINT question1_ibfk_1 FOREIGN KEY (categoryId) REFERENCES category (id);
        `);
    await queryRunner.query(`ALTER TABLE question
        ADD CONSTRAINT question2_ibfk_1 FOREIGN KEY (vocationId) REFERENCES vocation (id);
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE question`);
  }
}
