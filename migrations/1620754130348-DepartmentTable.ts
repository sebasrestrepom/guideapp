import { MigrationInterface, QueryRunner } from 'typeorm';

export class DepartmentTable1620754130348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE department ( id bigint(20) NOT NULL, name varchar(255) NOT NULL, code int(20) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    );
    await queryRunner.query(`ALTER TABLE department ADD PRIMARY KEY (id);`);
    await queryRunner.query(
      `ALTER TABLE department MODIFY id bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE department`);
  }
}
