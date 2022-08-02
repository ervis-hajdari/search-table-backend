import { MigrationInterface, QueryRunner } from 'typeorm';

export class AreasTable1659213840474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    
    CREATE TABLE areas(
            id INTEGER  NOT NULL PRIMARY KEY
           ,state  VARCHAR(30) NOT NULL
         );
         
         INSERT INTO areas(id,state) VALUES (1,'Massachusetts');
         INSERT INTO areas(id,state) VALUES (2,'Okinawa');
         INSERT INTO areas(id,state) VALUES (3,'New York');
         INSERT INTO areas(id,state) VALUES (4,'California');
         INSERT INTO areas(id,state) VALUES (5,'Kanto');
         INSERT INTO areas(id,state) VALUES (6,'Tirana');
         INSERT INTO areas(id,state) VALUES (7,'Colorado');
         INSERT INTO areas(id,state) VALUES (8,'Virginia');
         INSERT INTO areas(id,state) VALUES (9,'London');
         INSERT INTO areas(id,state) VALUES (10,'Athens');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE [IF EXISTS] areas`);
  }
}
