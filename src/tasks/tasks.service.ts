import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.TaskCreateInput) {
    const task = await this.prisma.task.create({ data });
    return task;
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.task.update({
      data,
      where,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
