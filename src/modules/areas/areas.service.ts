import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseType } from 'types/response.type';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area) private areaRepository: Repository<Area>,
  ) {}

  create(createAreaDto: CreateAreaDto) {
    return 'This action adds a new area';
  }

  async getAll(): Promise<ResponseType<Area[]>> {
    const result: Area[] = await this.areaRepository.find();

    return { data: result };
  }

  async findOne(id: number): Promise<ResponseType<Area>> {
    if (!id) throw new Error('id was not provided!');

    const result: Area = await this.areaRepository.findOne(id);

    if (!result) throw new NotFoundException('Area not found!');

    return { data: result };
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
