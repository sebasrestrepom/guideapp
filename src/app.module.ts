import { Module } from '@nestjs/common';
import { CityController } from './city/controller/CityController';
import { DepartmentController } from './department/controller/DepartmentController';
import { SQLDepartmentRepository } from './department/repository/SQLDepartmentRepository';
import { SQLCityRepository } from './city/repository/SQLCityRepository';
import { SQLSchoolRepository } from './school/repository/SQLSchoolRepository';
import { CityService } from './city/service/CityService';
import { SchoolController } from './school/controller/SchoolController';
import { DepartmentService } from './department/service/DeparmentService';
import { SchoolService } from './school/service/SchoolService';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [DepartmentController, CityController, SchoolController],
  providers: [
    { provide: 'DepartmentRepository', useClass: SQLDepartmentRepository },
    { provide: 'CityRepository', useClass: SQLCityRepository },
    { provide: 'SchoolRepository', useClass: SQLSchoolRepository },
    DepartmentService,
    CityService,
    SchoolService,
  ],
  exports: [],
})
export class AppModule {}
