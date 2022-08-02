import { Area } from 'modules/areas/entities/area.entity';
import { Company } from 'modules/companies/entities/company.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({
  name: 'shipments',
})
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Company, (company) => company.shipments, { cascade: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => Area, (area) => area.shipments, { cascade: true })
  @JoinColumn({ name: 'area_id' })
  area: Area;
}
