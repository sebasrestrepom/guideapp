import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentController } from './controller/DepartmentController';
import { InMemoryDepartmentRepository } from './repository/InMemoryDepartmentRepository';
import { DepartmentService } from './service/DeparmentService';

@Module({
  imports: [],
  controllers: [AppController,DepartmentController],
  providers: [
    AppService, 
    DepartmentService,
    {provide: 'DepartmentRepository', useClass: InMemoryDepartmentRepository}
  ],
})
export class AppModule {}
