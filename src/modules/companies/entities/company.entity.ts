import { Area } from 'modules/areas/entities/area.entity';
import { Shipment } from 'modules/shipments/entities/shipment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'companies',
})
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column({
    name: 'last_login',
    type: 'time without time zone',
  })
  lastLogin: string;

  @Column({ name: 'shipments_count', nullable: true })
  shipmentsCount: number;

  @ManyToMany(() => Area, (area) => area.companies)
  areas: Area[];

  @OneToMany(() => Shipment, (shipment) => shipment.company)
  shipments: Shipment[];
}
