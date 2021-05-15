import {MigrationInterface, QueryRunner} from "typeorm";

export class VocationData1621102719931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO vocation (name) VALUES
              ( 'c'),
              ( 'h'),
              ( 'a'),
              ( 's'),
              ( 'i'),
              ( 'd'),
              ( 'e');`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE vocation`);
    }

}
