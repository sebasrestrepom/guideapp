import { MigrationInterface, QueryRunner } from 'typeorm';

export class VocationData1621102719931 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO vocation (code, name) VALUES
              ( 'C', 'Administrativas y contables'),
              ( 'H', 'Humanísticas y sociales'),
              ( 'A', 'Artísticas'),
              ( 'S', 'Ciencias de la salud'),
              ( 'I', 'Ingnierías y computación'),
              ( 'D', 'Defensa y seguridad'),
              ( 'E', 'Ciencias exactas y agrarias');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE vocation`);
  }
}
