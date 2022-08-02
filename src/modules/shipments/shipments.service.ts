import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseType } from 'types/response.type';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { Shipment } from './entities/shipment.entity';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private shipmentRepository: Repository<Shipment>,
  ) {}

  create(createShipmentDto: CreateShipmentDto) {
    return 'This action adds a new shipment';
  }

  async getAll(options): Promise<ResponseType<Shipment[]>> {
    const result: Shipment[] = await this.shipmentRepository.find({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      relations: ['areas', 'companies'],
    });

    return { data: result };
  }

  async findOne(id: number): Promise<ResponseType<Shipment>> {
    if (!id) throw new Error('id was not provided!');

    const result: Shipment = await this.shipmentRepository.findOne(id);

    if (!result) throw new NotFoundException('Shipment not found!');

    return { data: result };
  }

  update(id: number, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipment`;
  }
}
