import { Company } from 'modules/companies/entities/company.entity';
import { Shipment } from 'modules/shipments/entities/shipment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({
  name: 'areas',
})
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @ManyToMany(() => Company, (company) => company.areas, { cascade: true })
  @JoinTable({
    name: 'company_area',
    joinColumn: {
      name: 'area_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'company_id',
      referencedColumnName: 'id',
    },
  })
  companies: Company[];

  @OneToMany(() => Shipment, (shipment) => shipment.area)
  shipments: Shipment[];
}
