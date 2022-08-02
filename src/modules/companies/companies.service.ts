import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Like, Repository } from 'typeorm';
import { PaginationType } from 'types/pagination.type';
import { ResponseType } from 'types/response.type';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  async getAll(
    pagination: PaginationType,
    filter,
  ): Promise<ResponseType<Company[]>> {
    // const result: Company[] = await this.companyRepository.find({
    //   relations: ['areas'],
    //   order: { shipmentsCount: 'DESC' },
    //   take: pagination.limit,
    //   skip: (pagination.page - 1) * pagination.limit,
    // });

    const resultQuery = this.companyRepository
      .createQueryBuilder('cmp')
      .leftJoinAndSelect('cmp.areas', 'areas')
      .limit(pagination.limit)
      .skip((pagination.page - 1) * pagination.limit);

    if (filter.country) {
      resultQuery.where({
        country: Like(`%${filter.country}%`),
      });
    }

    if (filter.areas) {
      resultQuery.andWhere('areas.state IN (:...state)', {
        state: filter.areas,
      });
    }

    resultQuery.orderBy('shipments_count', 'DESC');

    const result: Company[] = await resultQuery.getMany();

    return { data: result };
  }

  async findOne(id: number): Promise<ResponseType<Company>> {
    if (!id) throw new Error('id was not provided!');

    const result: Company = await this.companyRepository.findOne({
      relations: ['areas', 'areas.shipments'],
      where: { id },
    });

    if (!result) throw new NotFoundException('Company not found!');

    return { data: result };
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
