import { MigrationInterface, QueryRunner } from 'typeorm';

export class VocationTable1621102447314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE vocation (
            id bigint(20) NOT NULL,code varchar(255) NOT NULL,name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      `);
    await queryRunner.query(`ALTER TABLE vocation ADD PRIMARY KEY (id);`);
    await queryRunner.query(`ALTER TABLE vocation
          MODIFY id bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1127;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE vocation`);
  }
}
