import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompaniesAreasRelation1659215252624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    
    CREATE TABLE company_area (
        company_id    int REFERENCES companies (id) ON UPDATE CASCADE ON DELETE CASCADE
      , area_id int REFERENCES areas (id) ON UPDATE CASCADE ON DELETE CASCADE
      );
         
            INSERT INTO company_area(company_id,area_id) VALUES (1,1);
            INSERT INTO company_area(company_id,area_id) VALUES (1,3);
            INSERT INTO company_area(company_id,area_id) VALUES (1,4);
            INSERT INTO company_area(company_id,area_id) VALUES (1,8);
            INSERT INTO company_area(company_id,area_id) VALUES (2,4);
            INSERT INTO company_area(company_id,area_id) VALUES (2,7);
            INSERT INTO company_area(company_id,area_id) VALUES (2,1);
            INSERT INTO company_area(company_id,area_id) VALUES (2,3);
            INSERT INTO company_area(company_id,area_id) VALUES (2,8);
            INSERT INTO company_area(company_id,area_id) VALUES (3,9);
            INSERT INTO company_area(company_id,area_id) VALUES (4,1);
            INSERT INTO company_area(company_id,area_id) VALUES (4,3);
            INSERT INTO company_area(company_id,area_id) VALUES (5,2);
            INSERT INTO company_area(company_id,area_id) VALUES (5,5);
            INSERT INTO company_area(company_id,area_id) VALUES (6,9);
            INSERT INTO company_area(company_id,area_id) VALUES (7,6);
            INSERT INTO company_area(company_id,area_id) VALUES (8,10);
            INSERT INTO company_area(company_id,area_id) VALUES (9,6);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE [IF EXISTS] company_area`);
  }
}
