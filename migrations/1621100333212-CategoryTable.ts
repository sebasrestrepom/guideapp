import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoryTable1621100333212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE category (
            id bigint(20) NOT NULL,name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      `);
    await queryRunner.query(`ALTER TABLE category ADD PRIMARY KEY (id);`);

    await queryRunner.query(`ALTER TABLE category
      MODIFY id bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE category`);
  }
}
