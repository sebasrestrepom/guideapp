import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityController } from './controller/CityController';
import { DepartmentController } from './controller/DepartmentController';
import { InMemoryCityRepository } from './repository/InMemoryCityRepository';
import { InMemoryDepartmentRepository } from './repository/InMemoryDepartmentRepository';
import { CityService } from './service/CityService';
import { DepartmentService } from './service/DeparmentService';

@Module({
  imports: [],
  controllers: [AppController,DepartmentController,CityController],
  providers: [
    {provide: 'DepartmentRepository', useClass: InMemoryDepartmentRepository},
    {provide: 'CityRepository', useClass: InMemoryCityRepository},
    AppService, 
    DepartmentService,
    CityService,
  ],
  exports:[],
})
export class AppModule {}
