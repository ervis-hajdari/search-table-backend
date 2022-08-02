import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompaniesTable1659213939343 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    
    CREATE TABLE companies(
       id INTEGER  NOT NULL PRIMARY KEY
      ,name      VARCHAR(9) NOT NULL
      ,country   VARCHAR(2) NOT NULL
      ,last_login TIMESTAMP NOT NULL
    );

         INSERT INTO companies(id,name,country,last_login) VALUES (1,'Test US 1','US','2013-08-04 23:57:38');
         INSERT INTO companies(id,name,country,last_login) VALUES (2,'Test US 2','US','2013-07-12 13:27:18');
         INSERT INTO companies(id,name,country,last_login) VALUES (3,'Test GB','GB','2013-07-16 21:17:28');
         INSERT INTO companies(id,name,country,last_login) VALUES (4,'Test US 3','US','2013-01-01 10:57:38');
         INSERT INTO companies(id,name,country,last_login) VALUES (5,'Test JP','JP','2013-08-04 22:07:38');
         INSERT INTO companies(id,name,country,last_login) VALUES (6,'Test GB 2','GB','2013-08-04 21:57:38');
         INSERT INTO companies(id,name,country,last_login) VALUES (7,'Test AL','AL','2013-07-12 23:57:38');
         INSERT INTO companies(id,name,country,last_login) VALUES (8,'Test GR','GR','2013-08-05 13:27:38');
         INSERT INTO companies(id,name,country,last_login) VALUES (9,'Test AL 2','AL','2013-08-05 15:00:38');
         
         
         `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE [IF EXISTS] companies`);
  }
}
