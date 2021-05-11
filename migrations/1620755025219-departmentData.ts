import { MigrationInterface, QueryRunner } from 'typeorm';

export class departmentData1620755025219 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO department (id, name, code) VALUES
        (1, 'Antioquia', 5),
        (2, 'Atlantico', 8),
        (3, 'D. C. Santa Fe de Bogotá', 11),
        (4, 'Bolivar', 13),
        (5, 'Boyaca', 15),
        (6, 'Caldas', 17),
        (7, 'Caqueta', 18),
        (8, 'Cauca', 19),
        (9, 'Cesar', 20),
        (10, 'Cordova', 23),
        (11, 'Cundinamarca', 25),
        (12, 'Choco', 27),
        (13, 'Huila', 41),
        (14, 'La Guajira', 44),
        (15, 'Magdalena', 47),
        (16, 'Meta', 50),
        (17, 'Nariño', 52),
        (18, 'Norte de Santander', 54),
        (19, 'Quindio', 63),
        (20, 'Risaralda', 66),
        (21, 'Santander', 68),
        (22, 'Sucre', 70),
        (23, 'Tolima', 73),
        (24, 'Valle', 76),
        (25, 'Arauca', 81),
        (26, 'Casanare', 85),
        (27, 'Putumayo', 86),
        (28, 'San Andres', 88),
        (29, 'Amazonas', 91),
        (30, 'Guainia', 94),
        (31, 'Guaviare', 95),
        (32, 'Vaupes', 97),
        (33, 'Vichada', 99);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE department`);
  }
}
