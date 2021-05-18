import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoryData1621101865259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO category (id,name) VALUES
              (1,'Intereses'),
              (2,'Aptitudes');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE category`);
  }
}
