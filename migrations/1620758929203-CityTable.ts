import { MigrationInterface, QueryRunner } from 'typeorm';

export class CityTable1620758929203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE city (
                id bigint(20) NOT NULL,departmentId bigint(20) NOT NULL,code int(11) NOT NULL,name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
          `);
    await queryRunner.query(
      `ALTER TABLE city ADD PRIMARY KEY (id), ADD KEY departmentId (departmentId);`,
    );
    await queryRunner.query(`ALTER TABLE city
          MODIFY id bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1127;`);
            
    await queryRunner.query(`ALTER TABLE city
  ADD CONSTRAINT city_ibfk_1 FOREIGN KEY (departmentId) REFERENCES department (id);
`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE city`);
  }
}
