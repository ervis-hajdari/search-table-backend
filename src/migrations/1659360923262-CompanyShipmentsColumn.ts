import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompanyShipmentsColumn1659360923262 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    
    ALTER TABLE companies ADD COLUMN shipments_count INT;
    
    UPDATE companies c SET shipments_count = (
        SELECT COUNT(*)
        FROM shipments a
        WHERE a.company_id = c.id
    )
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP COLUMN shipments_count from companies;`);
  }
}
