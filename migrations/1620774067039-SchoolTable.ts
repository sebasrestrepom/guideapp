import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchoolTable1620774067039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE school (
            id bigint(20) NOT NULL,cityId bigint(20) NOT NULL,name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      `);
    await queryRunner.query(
      `ALTER TABLE school ADD PRIMARY KEY (id), ADD KEY cityId (cityId);`,
    );
    await queryRunner.query(`ALTER TABLE school
          MODIFY id bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1127;`);
    await queryRunner.query(`ALTER TABLE school
          ADD CONSTRAINT school_ibfk_1 FOREIGN KEY (cityId) REFERENCES city (id);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE school`);
  }
}
