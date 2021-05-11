import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityController } from './controller/CityController';
import { DepartmentController } from './controller/DepartmentController';
import { InMemoryCityRepository } from './repository/InMemoryCityRepository';
import { InMemoryDepartmentRepository } from './repository/InMemoryDepartmentRepository';
import { CityService } from './service/CityService';
import { SchoolController } from './controller/SchoolController';
import { InMemorySchoolRepository } from './repository/InMemorySchoolRepository';
import { DepartmentService } from './service/DeparmentService';
import { SchoolService } from './service/SchoolService';

@Module({
  imports: [],
  controllers: [AppController, DepartmentController, CityController,SchoolController],
  providers: [
    { provide: 'DepartmentRepository', useClass: InMemoryDepartmentRepository },
    { provide: 'CityRepository', useClass: InMemoryCityRepository },
    { provide: 'SchoolRepository', useClass: InMemorySchoolRepository },
    AppService,
    DepartmentService,
    CityService,
    SchoolService,
  ],
  exports: [],
})
export class AppModule {}
